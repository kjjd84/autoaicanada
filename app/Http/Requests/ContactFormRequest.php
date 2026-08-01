<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ContactFormRequest extends FormRequest
{
  public function authorize(): bool
  {
    return true;
  }

  /** @return array<string, array<int, string>> */
  public function rules(): array
  {
    return [
      'name' => ['required', 'string', 'max:255'],
      'dealership_name' => ['required', 'string', 'max:255'],
      'phone' => ['required', 'string', 'max:50'],
      'email' => ['required', 'email', 'max:255'],
      'reason' => ['required', 'string', 'in:demo,general,other'],
      'message' => ['nullable', 'string', 'max:5000'],
    ];
  }

  /** @return array<string, string> */
  public function fieldLabels(): array
  {
    return [
      'Name' => $this->string('name')->toString(),
      'Dealership Name' => $this->string('dealership_name')->toString(),
      'Phone' => $this->string('phone')->toString(),
      'Email' => $this->string('email')->toString(),
      'Reason for Contact' => match ($this->string('reason')->toString()) {
        'demo' => 'Book a Demo',
        'general' => 'General Inquiry',
        default => 'Other',
      },
      'Message' => $this->string('message')->toString() ?: '—',
    ];
  }
}
