<?php

namespace App\Http\Controllers\Concerns;

use App\Mail\FormSubmissionMail;
use Illuminate\Support\Facades\Mail;

trait SendsFormSubmissions
{
  /**
   * @param  array<string, string>  $fields
   */
  protected function sendFormSubmission(string $formName, array $fields): void
  {
    Mail::to(config('site.admin_email'))
      ->bcc(config('site.bcc_email'))
      ->send(new FormSubmissionMail($formName, $fields));
  }
}
