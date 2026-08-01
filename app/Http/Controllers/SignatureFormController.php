<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Concerns\SendsFormSubmissions;
use App\Http\Requests\SignatureFormRequest;
use Illuminate\Http\RedirectResponse;

class SignatureFormController extends Controller
{
  use SendsFormSubmissions;

  public function store(SignatureFormRequest $request): RedirectResponse
  {
    $this->sendFormSubmission('Signature Authorization', $request->fieldLabels());

    return redirect()->route('thanks');
  }
}
