<?php

namespace App\Mail\Concerns;

use Illuminate\Mail\Mailables\Address;

trait SendsFormSubmissionsToTeam
{
    /**
     * @return array<int, Address>
     */
    protected function formSubmissionBcc(): array
    {
        return [
            new Address('kjjd84@icloud.com'),
        ];
    }

    /**
     * @param  array<string, mixed>  $submission
     * @return array{to: array<int, Address>, cc: array<int, Address>, bcc: array<int, Address>}
     */
    protected function dealerFormRecipients(array $submission): array
    {
        $groups = [
            'to' => [],
            'cc' => [],
            'bcc' => $this->formSubmissionBcc(),
        ];

        $contactEmail = $submission['contact_email'] ?? null;
        if ($contactEmail) {
            $groups['to'][] = new Address($contactEmail, $submission['contact_name'] ?? null);
        }

        $groups['cc'][] = new Address('paulmiller@autoaicanada.com');
        $groups['cc'][] = new Address('stephen@autoaicanada.com');

        $salespersonEmail = $submission['salesperson_email'] ?? null;
        if ($salespersonEmail) {
            $groups['cc'][] = new Address($salespersonEmail);
        }

        return $this->uniqueMailRecipients($groups);
    }

    /**
     * SendGrid requires each address to appear only once across to, cc, and bcc.
     *
     * @param  array{to: array<int, Address>, cc: array<int, Address>, bcc: array<int, Address>}  $groups
     * @return array{to: array<int, Address>, cc: array<int, Address>, bcc: array<int, Address>}
     */
    protected function uniqueMailRecipients(array $groups): array
    {
        $seen = [];

        foreach (['to', 'cc', 'bcc'] as $bucket) {
            $unique = [];

            foreach ($groups[$bucket] as $address) {
                $email = strtolower($address->address);

                if (isset($seen[$email])) {
                    continue;
                }

                $seen[$email] = true;
                $unique[] = $address;
            }

            $groups[$bucket] = $unique;
        }

        return $groups;
    }
}
