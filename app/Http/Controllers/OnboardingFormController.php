<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Concerns\SendsFormSubmissions;
use App\Http\Requests\OnboardingFormRequest;
use App\Mail\OnboardingContactMail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Mail;

class OnboardingFormController extends Controller
{
  use SendsFormSubmissions;

  public function store(OnboardingFormRequest $request): RedirectResponse
  {
    $fields = $request->fieldLabels();

    $this->sendFormSubmission('Onboarding', $fields);

    Mail::to($request->string('contact_email')->toString())
      ->send(new OnboardingContactMail(
        $fields,
        route('signature'),
      ));

    return redirect()->route('thanks');
  }
}
