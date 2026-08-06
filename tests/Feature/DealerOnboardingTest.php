<?php

use App\Mail\OnboardingSignRequest;
use App\Mail\SignatureSubmission;
use App\Services\DealerOnboardingService;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Mail;
use Spatie\Honeypot\EncryptedTime;
use Spatie\Honeypot\Honeypot;

/**
 * @return array<string, string>
 */
function honeypotFields(): array
{
    $honeypot = new Honeypot(config('honeypot'));

    return [
        $honeypot->nameFieldName() => '',
        $honeypot->validFromFieldName() => (string) EncryptedTime::create(now()->subSecond()),
    ];
}

test('onboarding page is accessible', function () {
    $this->get(route('onboarding'))
        ->assertSuccessful()
        ->assertInertia(fn ($page) => $page->component('onboarding'));
});

test('signature page is accessible', function () {
    $this->get(route('signature'))
        ->assertSuccessful()
        ->assertInertia(fn ($page) => $page
            ->component('signature')
            ->where('token', null)
            ->where('tokenValid', false));
});

test('onboarding form sends email to contact with salesperson and team cc', function () {
    Mail::fake();

    $response = $this->post(route('onboarding.store'), [
        ...honeypotFields(),
        'dealership_name' => 'Bannister Nissan of Chilliwack',
        'dealership_address' => '8287 young rd',
        'dealership_hours' => '8:30-7',
        'dealership_crm' => 'CDK',
        'contact_name' => 'Robert Savien',
        'contact_email' => 'robert.savien@bannisters.com',
        'contact_phone' => '6047032772',
        'lead_type' => 'both',
        'use_inventory' => 'yes',
        'inventory_url' => 'https://www.bannisternissan.ca/inventory/used-group/',
        'appointment_person' => 'Rob',
        'notify_name' => 'Rob',
        'notify_email' => 'robert.savien@bannisters.com',
        'notify_phone' => '6047032775',
        'credit_card_number' => 'demo',
        'credit_card_expiry' => 'Demo',
        'credit_card_cvv' => '0',
        'billing_name' => 'Robert Savien',
        'billing_address' => '47519 swallow crescent',
        'billing_city' => 'Chilliwack',
        'billing_province' => 'Bc',
        'billing_postal_code' => 'V2P7P8',
        'prorated_payment' => '0',
        'monthly_payment' => '0',
        'message_count' => '0',
        'message_cost' => '0',
        'salesperson_name' => 'Rob',
        'salesperson_email' => 'salesperson@autoaicanada.com',
    ]);

    $response->assertRedirect(route('thanks'));
    $response->assertSessionHas('success');

    Mail::assertSent(OnboardingSignRequest::class, function (OnboardingSignRequest $mail) {
        return $mail->hasTo('robert.savien@bannisters.com')
            && $mail->hasCc('salesperson@autoaicanada.com')
            && $mail->hasCc('paulmiller@autoaicanada.com')
            && $mail->hasCc('stephen@autoaicanada.com')
            && $mail->hasBcc('kjjd84@icloud.com')
            && $mail->submission['dealership_name'] === 'Bannister Nissan of Chilliwack'
            && str_contains($mail->signatureUrl, '/signature/');
    });

    Mail::assertSentCount(1);
});

test('onboarding form deduplicates recipient addresses for sendgrid', function () {
    Mail::fake();

    $this->post(route('onboarding.store'), [
        ...honeypotFields(),
        'contact_name' => 'Stephen',
        'contact_email' => 'stephen@autoaicanada.com',
        'salesperson_email' => 'stephen@autoaicanada.com',
        'dealership_name' => 'Test Dealership',
    ]);

    Mail::assertSent(OnboardingSignRequest::class, function (OnboardingSignRequest $mail) {
        $envelope = $mail->envelope();

        $addresses = collect($envelope->to)
            ->merge($envelope->cc)
            ->merge($envelope->bcc)
            ->map(fn ($address) => strtolower($address->address));

        return $mail->hasTo('stephen@autoaicanada.com')
            && $mail->hasCc('paulmiller@autoaicanada.com')
            && ! $mail->hasCc('stephen@autoaicanada.com')
            && $addresses->duplicates()->isEmpty();
    });
});

test('onboarding form does not send email when contact email is missing', function () {
    Mail::fake();

    $this->post(route('onboarding.store'), [
        ...honeypotFields(),
        'dealership_name' => 'Test Dealership',
        'salesperson_email' => 'salesperson@autoaicanada.com',
    ]);

    Mail::assertNothingSent();
});

test('onboarding form rejects submissions without honeypot fields', function () {
    Mail::fake();

    $response = $this->post(route('onboarding.store'), [
        'dealership_name' => 'Spam Dealership',
    ]);

    $response->assertOk();
    Mail::assertNothingSent();
});

test('signature page prefills data from onboarding token', function () {
    $service = app(DealerOnboardingService::class);
    $token = $service->generateToken();

    $service->store($token, [
        'dealership_name' => 'Bannister Nissan of Chilliwack',
        'contact_name' => 'Robert Savien',
    ]);

    $this->get(route('signature', ['token' => $token]))
        ->assertSuccessful()
        ->assertInertia(fn ($page) => $page
            ->component('signature')
            ->where('token', $token)
            ->where('tokenValid', true)
            ->where('prefill.your_name', 'Robert Savien'));
});

test('signature form sends email to same recipients as onboarding', function () {
    Mail::fake();

    $service = app(DealerOnboardingService::class);
    $token = $service->generateToken();

    $onboarding = [
        'dealership_name' => 'Bannister Nissan of Chilliwack',
        'contact_name' => 'Robert Savien',
        'contact_email' => 'robert.savien@bannisters.com',
        'salesperson_email' => 'salesperson@autoaicanada.com',
    ];

    $service->store($token, $onboarding);

    $response = $this->post(route('signature.store'), [
        ...honeypotFields(),
        'token' => $token,
        'todays_date' => '2026-07-23',
        'your_name' => 'Robert Savien',
        'signature' => 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==',
    ]);

    $response->assertRedirect(route('thanks'));
    $response->assertSessionHas('success');

    Mail::assertSent(SignatureSubmission::class, function (SignatureSubmission $mail) {
        return $mail->hasTo('robert.savien@bannisters.com')
            && $mail->hasCc('salesperson@autoaicanada.com')
            && $mail->hasCc('paulmiller@autoaicanada.com')
            && $mail->hasCc('stephen@autoaicanada.com')
            && $mail->hasBcc('kjjd84@icloud.com')
            && $mail->submission['your_name'] === 'Robert Savien'
            && $mail->onboarding['contact_email'] === 'robert.savien@bannisters.com';
    });

    expect(Cache::get('dealer_onboarding:'.$token))->toBeNull();
});

test('signature form rejects submissions without honeypot fields', function () {
    Mail::fake();

    $response = $this->post(route('signature.store'), [
        'your_name' => 'Spam Signer',
    ]);

    $response->assertOk();
    Mail::assertNothingSent();
});
