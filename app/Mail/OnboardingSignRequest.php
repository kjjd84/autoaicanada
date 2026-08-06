<?php

namespace App\Mail;

use App\Mail\Concerns\SendsFormSubmissionsToTeam;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class OnboardingSignRequest extends Mailable
{
    use Queueable, SendsFormSubmissionsToTeam, SerializesModels;

    /**
     * @param  array<string, mixed>  $submission
     */
    public function __construct(
        public array $submission,
        public string $signatureUrl,
    ) {}

    public function envelope(): Envelope
    {
        $dealershipName = $this->submission['dealership_name'] ?? 'Dealership';
        $recipients = $this->dealerFormRecipients($this->submission);

        return new Envelope(
            to: $recipients['to'],
            cc: $recipients['cc'],
            bcc: $recipients['bcc'],
            subject: 'Onboarding: '.$dealershipName,
        );
    }

    public function content(): Content
    {
        return new Content(
            markdown: 'emails.onboarding-sign-request',
            with: [
                'submission' => $this->submission,
                'signatureUrl' => $this->signatureUrl,
            ],
        );
    }
}
