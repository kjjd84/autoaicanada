<?php

namespace App\Http\Controllers;

use App\Http\Requests\OnboardingFormRequest;
use App\Mail\OnboardingSignRequest;
use App\Services\DealerOnboardingService;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;
use Inertia\Response;

class OnboardingController extends Controller
{
    public function __construct(private DealerOnboardingService $onboarding) {}

    public function show(): Response
    {
        return Inertia::render('onboarding');
    }

    public function store(OnboardingFormRequest $request): RedirectResponse
    {
        $submission = $request->validated();
        $token = $this->onboarding->generateToken();
        $signatureUrl = $this->onboarding->signatureUrl($token);

        $this->onboarding->store($token, $submission);

        if (! empty($submission['contact_email'])) {
            Mail::send(new OnboardingSignRequest($submission, $signatureUrl));
        }

        return redirect()
            ->route('thanks')
            ->with('success', 'Thank you! Your onboarding details have been submitted. A signature link has been sent to your contact email.');
    }
}
