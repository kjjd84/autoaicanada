@component('mail::message')
# New {{ $formName }} Submission

@foreach ($fields as $label => $value)
**{{ $label }}:** {{ $value }}

@endforeach

@if ($signatureImageData)
**Signature:**

<img src="{{ $message->embedData($signatureImageData, 'signature.png', 'image/png') }}" alt="Digital Signature" style="max-width: 300px; height: auto;">
@endif

Thanks,<br>
{{ config('app.name') }}
@endcomponent
