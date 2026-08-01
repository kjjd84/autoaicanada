<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Concerns\SendsFormSubmissions;
use App\Http\Requests\LandingFormRequest;
use Illuminate\Http\RedirectResponse;

class LandingFormController extends Controller
{
  use SendsFormSubmissions;

  public function store(LandingFormRequest $request): RedirectResponse
  {
    $this->sendFormSubmission('Landing Page', $request->fieldLabels());

    return redirect()->route('thanks');
  }
}
