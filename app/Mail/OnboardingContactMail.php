<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class OnboardingContactMail extends Mailable
{
  use Queueable, SerializesModels;

  /**
   * @param  array<string, string>  $fields
   */
  public function __construct(
    public array $fields,
    public string $signatureUrl,
  ) {}

  public function envelope(): Envelope
  {
    return new Envelope(
      subject: 'Your Auto AI Canada Onboarding Summary',
    );
  }

  public function content(): Content
  {
    return new Content(
      markdown: 'emails.onboarding-contact',
    );
  }
}
