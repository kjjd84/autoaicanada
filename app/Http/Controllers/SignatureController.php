<?php

namespace App\Http\Controllers;

use App\Http\Requests\SignatureFormRequest;
use App\Mail\SignatureSubmission;
use App\Services\DealerOnboardingService;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;
use Inertia\Response;

class SignatureController extends Controller
{
    public function __construct(private DealerOnboardingService $onboarding) {}

    public function show(?string $token = null): Response
    {
        $onboarding = $token ? $this->onboarding->retrieve($token) : null;

        return Inertia::render('signature', [
            'token' => $token,
            'prefill' => [
                'your_name' => $onboarding['contact_name'] ?? $onboarding['billing_name'] ?? null,
                'todays_date' => now()->format('Y-m-d'),
            ],
            'tokenValid' => $onboarding !== null,
        ]);
    }

    public function store(SignatureFormRequest $request): RedirectResponse
    {
        $submission = $request->validated();
        $token = $submission['token'] ?? null;
        $onboarding = $token ? $this->onboarding->retrieve($token) : null;

        if ($onboarding && ! empty($onboarding['contact_email'])) {
            Mail::send(new SignatureSubmission($submission, $onboarding));
        }

        if ($token) {
            $this->onboarding->forget($token);
        }

        return redirect()
            ->route('thanks')
            ->with('success', 'Thank you! Your signed agreement has been submitted successfully.');
    }
}
