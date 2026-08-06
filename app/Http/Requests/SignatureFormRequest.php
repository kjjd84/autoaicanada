<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class SignatureFormRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    /**
     * @return array<string, array<int, string>>
     */
    public function rules(): array
    {
        return [
            'token' => ['nullable', 'string', 'max:64'],
            'todays_date' => ['nullable', 'string', 'max:20'],
            'your_name' => ['nullable', 'string', 'max:255'],
            'signature' => ['nullable', 'string', 'max:100000'],
        ];
    }
}
