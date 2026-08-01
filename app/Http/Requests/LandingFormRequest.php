<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class LandingFormRequest extends FormRequest
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
    ];
  }
}
