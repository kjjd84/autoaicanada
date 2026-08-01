import { HoneypotFields } from '@/components/honeypot-fields';
import { SectionHeading } from '@/components/header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import SiteLayout from '@/layouts/site-layout';
import { Form } from '@inertiajs/react';
import type { ReactNode } from 'react';

function FormSection({
    title,
    description,
    children,
}: {
    title: string;
    description?: string;
    children: ReactNode;
}) {
    return (
        <div className="glow-border rounded-2xl border border-white/5 bg-white/5 p-8">
            <h3 className="text-xl font-bold text-white">{title}</h3>
            {description && (
                <p className="mt-2 text-sm text-gray-400">{description}</p>
            )}
            <div className="mt-6 space-y-4">{children}</div>
        </div>
    );
}

export default function Onboarding() {
    return (
        <SiteLayout title="Onboarding" showHeader={false}>
            <section className="py-12">
                <div className="mx-auto max-w-4xl px-6">
                    <div className="mb-8 text-center">
                        <img
                            src="/images/logo.png"
                            alt="Auto AI Canada"
                            className="mx-auto mb-6 h-12 w-auto"
                        />
                        <SectionHeading
                            title="Dealer Onboarding"
                            subtitle="Complete this form to onboard a new dealership."
                        />
                    </div>

                    <Form action="/onboarding" method="post">
                        {({ errors, processing }) => (
                            <div className="space-y-8">
                                <HoneypotFields />

                                <FormSection
                                    title="Dealership"
                                    description="The details for the dealership that is being onboarded."
                                >
                                    <Input
                                        name="dealership_name"
                                        label="Dealership Name *"
                                        required
                                        error={errors.dealership_name}
                                    />
                                    <Input
                                        name="dealership_address"
                                        label="Dealership Street Address *"
                                        required
                                        error={errors.dealership_address}
                                    />
                                    <Input
                                        name="dealership_hours"
                                        label="Dealership Business Hours *"
                                        required
                                        error={errors.dealership_hours}
                                    />
                                    <Input
                                        name="dealership_crm"
                                        label="Dealership CRM Provider *"
                                        required
                                        error={errors.dealership_crm}
                                    />
                                </FormSection>

                                <FormSection
                                    title="Contact"
                                    description="The primary contact for the dealership. An email will be sent to them with the details of this onboarding form."
                                >
                                    <Input
                                        name="contact_name"
                                        label="Contact Name *"
                                        required
                                        error={errors.contact_name}
                                    />
                                    <Input
                                        name="contact_email"
                                        label="Contact Email Address *"
                                        type="email"
                                        required
                                        error={errors.contact_email}
                                    />
                                    <Input
                                        name="contact_phone"
                                        label="Contact Phone Number *"
                                        type="tel"
                                        required
                                        error={errors.contact_phone}
                                    />
                                </FormSection>

                                <FormSection
                                    title="AI Agent"
                                    description="Details on the AI and how we will handle their leads."
                                >
                                    <Select
                                        name="lead_type"
                                        label="Will the AI contact new leads, old leads, or both? *"
                                        required
                                        error={errors.lead_type}
                                        options={[
                                            {
                                                value: 'old',
                                                label: 'Old Leads',
                                            },
                                            {
                                                value: 'new',
                                                label: 'New Leads',
                                            },
                                            {
                                                value: 'both',
                                                label: 'Both',
                                            },
                                        ]}
                                    />
                                    <Select
                                        name="use_inventory"
                                        label="Will the AI use the current dealer vehicle inventory? *"
                                        required
                                        error={errors.use_inventory}
                                        options={[
                                            { value: 'yes', label: 'Yes' },
                                            { value: 'no', label: 'No' },
                                            {
                                                value: 'not_sure',
                                                label: 'Not Sure',
                                            },
                                        ]}
                                    />
                                    <Input
                                        name="inventory_url"
                                        label="Dealer Inventory URL / API details"
                                        error={errors.inventory_url}
                                    />
                                    <Input
                                        name="appointment_person"
                                        label="Appointment Person Name *"
                                        required
                                        error={errors.appointment_person}
                                    />
                                </FormSection>

                                <FormSection
                                    title="Notifications"
                                    description="Where notifications should be sent when leads become engaged or appointments are booked."
                                >
                                    <Input
                                        name="notify_name"
                                        label="Notify Name *"
                                        required
                                        error={errors.notify_name}
                                    />
                                    <Input
                                        name="notify_email"
                                        label="Notify Email Address *"
                                        type="email"
                                        required
                                        error={errors.notify_email}
                                    />
                                    <Input
                                        name="notify_phone"
                                        label="Notify Phone Number *"
                                        type="tel"
                                        required
                                        error={errors.notify_phone}
                                    />
                                </FormSection>

                                <FormSection title="Credit Card">
                                    <Input
                                        name="credit_card_number"
                                        label="Credit Card Number *"
                                        required
                                        error={errors.credit_card_number}
                                    />
                                    <div className="grid gap-4 md:grid-cols-2">
                                        <Input
                                            name="credit_card_expiry"
                                            label="Expiration Date (MM/YY) *"
                                            placeholder="MM/YY"
                                            required
                                            error={errors.credit_card_expiry}
                                        />
                                        <Input
                                            name="credit_card_cvv"
                                            label="Security Code (CVV/CVC) *"
                                            required
                                            error={errors.credit_card_cvv}
                                        />
                                    </div>
                                </FormSection>

                                <FormSection
                                    title="Billing"
                                    description="The billable person's info, which should match the credit card."
                                >
                                    <Input
                                        name="billing_name"
                                        label="Billing Name *"
                                        required
                                        error={errors.billing_name}
                                    />
                                    <Input
                                        name="billing_address"
                                        label="Billing Address *"
                                        required
                                        error={errors.billing_address}
                                    />
                                    <div className="grid gap-4 md:grid-cols-3">
                                        <Input
                                            name="billing_city"
                                            label="Billing City *"
                                            required
                                            error={errors.billing_city}
                                        />
                                        <Input
                                            name="billing_province"
                                            label="Billing Province *"
                                            required
                                            error={errors.billing_province}
                                        />
                                        <Input
                                            name="billing_postal_code"
                                            label="Billing Postal Code *"
                                            required
                                            error={errors.billing_postal_code}
                                        />
                                    </div>
                                </FormSection>

                                <FormSection title="Payments (Required)">
                                    <div className="grid gap-4 md:grid-cols-2">
                                        <Input
                                            name="prorated_payment"
                                            label="Prorated Payment *"
                                            required
                                            error={errors.prorated_payment}
                                        />
                                        <Input
                                            name="monthly_payment"
                                            label="Monthly Payment *"
                                            required
                                            error={errors.monthly_payment}
                                        />
                                    </div>
                                </FormSection>

                                <FormSection title="Additional Messages">
                                    <p className="text-sm text-gray-400">
                                        Additional text messages are billed at
                                        $60 per 1,000 messages.
                                    </p>
                                    <div className="grid gap-4 md:grid-cols-2">
                                        <Input
                                            name="message_count"
                                            label="Number of Messages"
                                            error={errors.message_count}
                                        />
                                        <Input
                                            name="message_cost"
                                            label="Total Cost of Messages"
                                            error={errors.message_cost}
                                        />
                                    </div>
                                </FormSection>

                                <FormSection title="Salesperson (Required)">
                                    <Input
                                        name="salesperson_name"
                                        label="Salesperson Name *"
                                        required
                                        error={errors.salesperson_name}
                                    />
                                    <Input
                                        name="salesperson_email"
                                        label="Salesperson Email *"
                                        type="email"
                                        required
                                        error={errors.salesperson_email}
                                    />
                                </FormSection>

                                <FormSection title="Notes">
                                    <Textarea
                                        name="notes"
                                        label="Additional notes for this dealer's setup"
                                        rows={4}
                                        error={errors.notes}
                                    />
                                </FormSection>

                                <Button
                                    type="submit"
                                    size="lg"
                                    className="w-full"
                                    disabled={processing}
                                >
                                    {processing
                                        ? 'Submitting...'
                                        : 'Submit Onboarding'}
                                </Button>
                            </div>
                        )}
                    </Form>
                </div>
            </section>
        </SiteLayout>
    );
}
