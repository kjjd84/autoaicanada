<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class SignatureFormRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    /** @return array<string, array<int, string>> */
    public function rules(): array
    {
        return [
            'date' => ['required', 'date'],
            'name' => ['required', 'string', 'max:255'],
            'signature' => ['required', 'string'],
        ];
    }

    /** @return array<string, string> */
    public function fieldLabels(): array
    {
        return [
            'Date' => $this->string('date')->toString(),
            'Name' => $this->string('name')->toString(),
        ];
    }

    public function signatureImageData(): ?string
    {
        $signature = $this->string('signature')->toString();

        if (! preg_match('/^data:image\/\w+;base64,(.+)$/', $signature, $matches)) {
            return null;
        }

        return base64_decode($matches[1]);
    }
}
