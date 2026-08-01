@component('mail::message')
# New {{ $formName }} Submission

@foreach ($fields as $label => $value)
**{{ $label }}:** {{ $value }}

@endforeach

Thanks,<br>
{{ config('app.name') }}
@endcomponent
