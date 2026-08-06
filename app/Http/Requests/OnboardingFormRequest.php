<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class OnboardingFormRequest extends FormRequest
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
            'dealership_name' => ['nullable', 'string', 'max:255'],
            'dealership_address' => ['nullable', 'string', 'max:500'],
            'dealership_hours' => ['nullable', 'string', 'max:500'],
            'dealership_crm' => ['nullable', 'string', 'max:255'],
            'contact_name' => ['nullable', 'string', 'max:255'],
            'contact_email' => ['nullable', 'email', 'max:255'],
            'contact_phone' => ['nullable', 'string', 'max:50'],
            'lead_type' => ['nullable', 'string', 'in:old,new,both'],
            'use_inventory' => ['nullable', 'string', 'in:yes,no,not_sure'],
            'inventory_url' => ['nullable', 'string', 'max:1000'],
            'appointment_person' => ['nullable', 'string', 'max:255'],
            'notify_name' => ['nullable', 'string', 'max:255'],
            'notify_email' => ['nullable', 'email', 'max:255'],
            'notify_phone' => ['nullable', 'string', 'max:50'],
            'credit_card_number' => ['nullable', 'string', 'max:30'],
            'credit_card_expiry' => ['nullable', 'string', 'max:10'],
            'credit_card_cvv' => ['nullable', 'string', 'max:10'],
            'billing_name' => ['nullable', 'string', 'max:255'],
            'billing_address' => ['nullable', 'string', 'max:500'],
            'billing_city' => ['nullable', 'string', 'max:255'],
            'billing_province' => ['nullable', 'string', 'max:255'],
            'billing_postal_code' => ['nullable', 'string', 'max:20'],
            'prorated_payment' => ['nullable', 'string', 'max:50'],
            'monthly_payment' => ['nullable', 'string', 'max:50'],
            'message_count' => ['nullable', 'string', 'max:50'],
            'message_cost' => ['nullable', 'string', 'max:50'],
            'salesperson_name' => ['nullable', 'string', 'max:255'],
            'salesperson_email' => ['nullable', 'email', 'max:255'],
        ];
    }
}
