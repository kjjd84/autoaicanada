<?php

namespace App\Mail;

use App\Mail\Concerns\SendsFormSubmissionsToTeam;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class SignatureSubmission extends Mailable
{
    use Queueable, SendsFormSubmissionsToTeam, SerializesModels;

    /**
     * @param  array<string, mixed>  $submission
     * @param  array<string, mixed>|null  $onboarding
     */
    public function __construct(
        public array $submission,
        public ?array $onboarding = null,
    ) {}

    public function envelope(): Envelope
    {
        $dealershipName = $this->onboarding['dealership_name']
            ?? $this->submission['dealership_name']
            ?? 'Dealership';
        $recipients = $this->dealerFormRecipients($this->onboarding ?? []);

        return new Envelope(
            to: $recipients['to'],
            cc: $recipients['cc'],
            bcc: $recipients['bcc'],
            subject: 'Signature: '.$dealershipName,
        );
    }

    public function content(): Content
    {
        return new Content(
            markdown: 'emails.signature-submission',
            with: [
                'submission' => $this->submission,
                'onboarding' => $this->onboarding,
            ],
        );
    }
}
