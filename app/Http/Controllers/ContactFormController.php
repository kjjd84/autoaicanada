<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Concerns\SendsFormSubmissions;
use App\Http\Requests\ContactFormRequest;
use Illuminate\Http\RedirectResponse;

class ContactFormController extends Controller
{
  use SendsFormSubmissions;

  public function store(ContactFormRequest $request): RedirectResponse
  {
    $this->sendFormSubmission('Contact', $request->fieldLabels());

    return redirect()->route('thanks');
  }
}
