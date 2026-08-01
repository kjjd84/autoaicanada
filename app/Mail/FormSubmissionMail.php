<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class FormSubmissionMail extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * @param  array<string, string>  $fields
     */
    public function __construct(
        public string $formName,
        public array $fields,
        public ?string $signatureImageData = null,
    ) {}

    public function envelope(): Envelope
    {
        return new Envelope(
            subject: "New {$this->formName} Submission — Auto AI Canada",
        );
    }

    public function content(): Content
    {
        return new Content(
            markdown: 'emails.form-submission',
        );
    }
}
