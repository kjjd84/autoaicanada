<x-mail::message>
# Onboarding

If you agree to the details provided in this email, please click here to sign:

<x-mail::button :url="$signatureUrl">
CLICK HERE TO SIGN NOW
</x-mail::button>

## Dealership

**Dealership Name:** {{ $submission['dealership_name'] ?? '—' }}

**Dealership Street Address:** {{ $submission['dealership_address'] ?? '—' }}

**Dealership Business Hours:** {{ $submission['dealership_hours'] ?? '—' }}

**Dealership CRM Provider:** {{ $submission['dealership_crm'] ?? '—' }}

## Contact

**Contact Name:** {{ $submission['contact_name'] ?? '—' }}

**Contact Email Address:** {{ $submission['contact_email'] ?? '—' }}

**Contact Phone Number:** {{ $submission['contact_phone'] ?? '—' }}

## AI Agent

**Will the AI contact new leads, old leads, or both?:** {{ match ($submission['lead_type'] ?? null) {
    'old' => 'Old Leads',
    'new' => 'New Leads',
    'both' => 'Both',
    default => '—',
} }}

**Will the AI use the current dealer inventory?:** {{ match ($submission['use_inventory'] ?? null) {
    'yes' => 'Yes',
    'no' => 'No',
    'not_sure' => 'Not Sure',
    default => '—',
} }}

**Dealer Inventory URL / API details:** {{ $submission['inventory_url'] ?? '—' }}

**Appointment Person Name:** {{ $submission['appointment_person'] ?? '—' }}

## Notifications

**Notify Name:** {{ $submission['notify_name'] ?? '—' }}

**Notify Email Address:** {{ $submission['notify_email'] ?? '—' }}

**Notify Phone Number:** {{ $submission['notify_phone'] ?? '—' }}

## Credit Card

**Credit Card Number:** {{ $submission['credit_card_number'] ?? '—' }}

**Credit Card Expiration Date:** {{ $submission['credit_card_expiry'] ?? '—' }}

**Credit Card Security Code:** {{ $submission['credit_card_cvv'] ?? '—' }}

## Billing

**Billing Name:** {{ $submission['billing_name'] ?? '—' }}

**Billing Address:** {{ $submission['billing_address'] ?? '—' }}

**Billing City:** {{ $submission['billing_city'] ?? '—' }}

**Billing Province:** {{ $submission['billing_province'] ?? '—' }}

**Billing Postal Code:** {{ $submission['billing_postal_code'] ?? '—' }}

## Payments

**Prorated Payment:** {{ $submission['prorated_payment'] ?? '—' }}

**Monthly Payment:** {{ $submission['monthly_payment'] ?? '—' }}

## Additional Messages

**Number of Messages:** {{ $submission['message_count'] ?? '—' }}

**Total Cost of Messages:** {{ $submission['message_cost'] ?? '—' }}

## Salesperson

**Salesperson Name:** {{ $submission['salesperson_name'] ?? '—' }}

**Salesperson Email:** {{ $submission['salesperson_email'] ?? '—' }}
</x-mail::message>
