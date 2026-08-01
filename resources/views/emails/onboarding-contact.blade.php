@component('mail::message')
# Your Auto AI Canada Onboarding Summary

Thank you for choosing Auto AI Canada. Below is a summary of the information submitted for your dealership onboarding.

@foreach ($fields as $label => $value)
**{{ $label }}:** {{ $value }}

@endforeach

## Next Step: Authorization

Please review the information above and complete the authorization form by clicking the button below.

@component('mail::button', ['url' => $signatureUrl])
Complete Authorization
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent
