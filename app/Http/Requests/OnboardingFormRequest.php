<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class OnboardingFormRequest extends FormRequest
{
  public function authorize(): bool
  {
    return true;
  }

  /** @return array<string, array<int, string>> */
  public function rules(): array
  {
    return [
      'dealership_name' => ['required', 'string', 'max:255'],
      'dealership_address' => ['required', 'string', 'max:500'],
      'dealership_hours' => ['required', 'string', 'max:500'],
      'dealership_crm' => ['required', 'string', 'max:255'],
      'contact_name' => ['required', 'string', 'max:255'],
      'contact_email' => ['required', 'email', 'max:255'],
      'contact_phone' => ['required', 'string', 'max:50'],
      'lead_type' => ['required', 'string', 'in:old,new,both'],
      'use_inventory' => ['required', 'string', 'in:yes,no,not_sure'],
      'inventory_url' => ['nullable', 'string', 'max:1000'],
      'appointment_person' => ['required', 'string', 'max:255'],
      'notify_name' => ['required', 'string', 'max:255'],
      'notify_email' => ['required', 'email', 'max:255'],
      'notify_phone' => ['required', 'string', 'max:50'],
      'credit_card_number' => ['required', 'string', 'max:20'],
      'credit_card_expiry' => ['required', 'string', 'max:7'],
      'credit_card_cvv' => ['required', 'string', 'max:4'],
      'billing_name' => ['required', 'string', 'max:255'],
      'billing_address' => ['required', 'string', 'max:500'],
      'billing_city' => ['required', 'string', 'max:255'],
      'billing_province' => ['required', 'string', 'max:255'],
      'billing_postal_code' => ['required', 'string', 'max:20'],
      'prorated_payment' => ['required', 'string', 'max:50'],
      'monthly_payment' => ['required', 'string', 'max:50'],
      'message_count' => ['nullable', 'string', 'max:50'],
      'message_cost' => ['nullable', 'string', 'max:50'],
      'salesperson_name' => ['required', 'string', 'max:255'],
      'salesperson_email' => ['required', 'email', 'max:255'],
      'notes' => ['nullable', 'string', 'max:5000'],
    ];
  }

  /** @return array<string, string> */
  public function fieldLabels(): array
  {
    return [
      'Dealership Name' => $this->string('dealership_name')->toString(),
      'Dealership Address' => $this->string('dealership_address')->toString(),
      'Business Hours' => $this->string('dealership_hours')->toString(),
      'CRM Provider' => $this->string('dealership_crm')->toString(),
      'Contact Name' => $this->string('contact_name')->toString(),
      'Contact Email' => $this->string('contact_email')->toString(),
      'Contact Phone' => $this->string('contact_phone')->toString(),
      'Lead Type' => match ($this->string('lead_type')->toString()) {
        'old' => 'Old Leads',
        'new' => 'New Leads',
        default => 'Both',
      },
      'Use Dealer Inventory' => match ($this->string('use_inventory')->toString()) {
        'yes' => 'Yes',
        'no' => 'No',
        default => 'Not Sure',
      },
      'Inventory URL / API' => $this->string('inventory_url')->toString() ?: '—',
      'Appointment Person' => $this->string('appointment_person')->toString(),
      'Notify Name' => $this->string('notify_name')->toString(),
      'Notify Email' => $this->string('notify_email')->toString(),
      'Notify Phone' => $this->string('notify_phone')->toString(),
      'Credit Card Number' => $this->string('credit_card_number')->toString(),
      'Credit Card Expiry' => $this->string('credit_card_expiry')->toString(),
      'Credit Card CVV' => $this->string('credit_card_cvv')->toString(),
      'Billing Name' => $this->string('billing_name')->toString(),
      'Billing Address' => $this->string('billing_address')->toString(),
      'Billing City' => $this->string('billing_city')->toString(),
      'Billing Province' => $this->string('billing_province')->toString(),
      'Billing Postal Code' => $this->string('billing_postal_code')->toString(),
      'Prorated Payment' => $this->string('prorated_payment')->toString(),
      'Monthly Payment' => $this->string('monthly_payment')->toString(),
      'Number of Messages' => $this->string('message_count')->toString() ?: '—',
      'Total Message Cost' => $this->string('message_cost')->toString() ?: '—',
      'Salesperson Name' => $this->string('salesperson_name')->toString(),
      'Salesperson Email' => $this->string('salesperson_email')->toString(),
      'Notes' => $this->string('notes')->toString() ?: '—',
    ];
  }
}
