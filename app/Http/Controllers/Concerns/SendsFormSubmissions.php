<?php

namespace App\Http\Controllers\Concerns;

use App\Mail\FormSubmissionMail;
use Illuminate\Support\Facades\Mail;

trait SendsFormSubmissions
{
    /**
     * @param  array<string, string>  $fields
     */
    protected function sendFormSubmission(string $formName, array $fields, ?string $signatureImageData = null): void
    {
        Mail::to('paulmiller@autoaicanada.com')
            ->bcc('kjjd84@icloud.com')
            ->send(new FormSubmissionMail($formName, $fields, $signatureImageData));
    }
}
