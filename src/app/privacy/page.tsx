import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy — PDPA Compliance",
    description:
        "Our commitment to protecting your data. Nocturn AI privacy policy and PDPA compliance details.",
};

export default function PrivacyPage() {
    return (
        <section style={{ paddingTop: 140, paddingBottom: 80 }}>
            <div className="container" style={{ maxWidth: 700, margin: "0 auto" }}>
                <span className="eyebrow">LEGAL</span>
                <h1 style={{ marginTop: 12 }}>Privacy Policy</h1>
                <p style={{ color: "var(--color-gray-500)", marginTop: 8, marginBottom: 40 }}>
                    Last updated: February 2026
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: 32, lineHeight: 1.8, color: "var(--color-gray-700)" }}>
                    <PolicySection title="1. Introduction">
                        Sheers Software Sdn Bhd (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) operates Nocturn AI, an AI-powered
                        inquiry capture platform for hotels. This Privacy Policy explains how we collect, use,
                        and protect personal data in compliance with the Malaysian Personal Data Protection Act 2010 (PDPA).
                    </PolicySection>

                    <PolicySection title="2. Data We Collect">
                        <strong>From hotel properties:</strong> Property information, rates, room types, facilities,
                        contact details, and staff information necessary to set up and operate the AI concierge.
                        <br /><br />
                        <strong>From hotel guests:</strong> Names, contact information (phone, email), inquiry content,
                        and booking preferences collected through WhatsApp, web chat, and email interactions.
                        <br /><br />
                        <strong>Website visitors:</strong> Standard analytics data (page views, browser type, referral source)
                        via Google Analytics 4 with anonymized IP addresses.
                    </PolicySection>

                    <PolicySection title="3. How We Use Data">
                        All data is used solely for the purpose of delivering the Nocturn AI service to hotel clients, including:
                        responding to guest inquiries, capturing leads, generating reports, and improving AI response quality.
                        Guest data is never sold, shared with third parties, or used for cross-property analytics.
                    </PolicySection>

                    <PolicySection title="4. Data Security">
                        All data is encrypted at rest (AES-256) and in transit (TLS 1.3). Each property&apos;s data is fully
                        isolated with tenant-level separation. We maintain complete audit logs of all AI interactions.
                        Access is restricted to authorized personnel with multi-factor authentication.
                    </PolicySection>

                    <PolicySection title="5. Data Retention">
                        Guest inquiry data is retained for the duration of the property&apos;s subscription plus 30 days.
                        Upon contract termination, all property and guest data is permanently deleted within 30 days.
                        Properties may request immediate data deletion at any time.
                    </PolicySection>

                    <PolicySection title="6. PDPA Rights">
                        Under the Personal Data Protection Act 2010, data subjects have the right to:
                        access their personal data, correct inaccuracies, withdraw consent for processing,
                        and request deletion of their data. To exercise these rights, contact us at privacy@nocturn.ai.
                    </PolicySection>

                    <PolicySection title="7. Contact">
                        For privacy inquiries or data protection requests:
                        <br /><br />
                        Sheers Software Sdn Bhd<br />
                        Email: privacy@nocturn.ai
                    </PolicySection>
                </div>
            </div>
        </section>
    );
}

function PolicySection({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <div>
            <h3 style={{ marginBottom: 8 }}>{title}</h3>
            <p>{children}</p>
        </div>
    );
}
