<x-mail::message>
# Signature

**Today's Date:** {{ $submission['todays_date'] ?? '—' }}

**Your Name:** {{ $submission['your_name'] ?? '—' }}

@if(! empty($submission['signature']))
**Your Signature:**

<img src="{{ $submission['signature'] }}" alt="Dealer signature" style="max-width: 400px; border: 1px solid #e2e8f0; border-radius: 8px;" />
@endif
</x-mail::message>
