import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms of Service",
    description: "Terms of service for Nocturn AI by Sheers Software Sdn Bhd.",
};

export default function TermsPage() {
    return (
        <section style={{ paddingTop: 140, paddingBottom: 80 }}>
            <div className="container" style={{ maxWidth: 700, margin: "0 auto" }}>
                <span className="eyebrow">LEGAL</span>
                <h1 style={{ marginTop: 12 }}>Terms of Service</h1>
                <p style={{ color: "var(--color-gray-500)", marginTop: 8, marginBottom: 40 }}>
                    Last updated: February 2026
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: 32, lineHeight: 1.8, color: "var(--color-gray-700)" }}>
                    <TermsSection title="1. Agreement">
                        These Terms of Service (&quot;Terms&quot;) govern your use of Nocturn AI, a product of Sheers Software
                        Sdn Bhd. By accessing or using our service, you agree to be bound by these Terms.
                    </TermsSection>

                    <TermsSection title="2. Service Description">
                        Nocturn AI provides AI-powered inquiry capture and response services for hotel properties,
                        including WhatsApp automation, web chat, email handling, lead capture, and reporting dashboards.
                    </TermsSection>

                    <TermsSection title="3. Free Pilot">
                        All plans begin with a 30-day free pilot period. No credit card is required to start.
                        At the end of the pilot, you may choose to continue on a paid plan or discontinue the service
                        with no obligation.
                    </TermsSection>

                    <TermsSection title="4. Billing">
                        Paid subscriptions are billed monthly unless otherwise agreed. Prices are quoted in Malaysian
                        Ringgit (RM) and are exclusive of applicable taxes. You may cancel your subscription at any time,
                        effective at the end of the current billing cycle.
                    </TermsSection>

                    <TermsSection title="5. Acceptable Use">
                        You agree to use Nocturn AI only for legitimate hotel business purposes. You are responsible
                        for the accuracy of property information provided to us. You agree not to use the service
                        for spam, deception, or any unlawful purpose.
                    </TermsSection>

                    <TermsSection title="6. Data Ownership">
                        You retain full ownership of all property data and guest inquiry data processed through Nocturn AI.
                        We do not claim ownership of your data. See our Privacy Policy for details on data handling.
                    </TermsSection>

                    <TermsSection title="7. AI Response Accuracy">
                        While Nocturn AI is designed to provide accurate responses based on your verified knowledge base,
                        AI responses are generated content and may occasionally contain errors. The AI will not fabricate
                        rates or information not present in your knowledge base. Complex or unusual requests are
                        automatically escalated to your human team.
                    </TermsSection>

                    <TermsSection title="8. Limitation of Liability">
                        Sheers Software Sdn Bhd shall not be liable for any indirect, incidental, or consequential
                        damages arising from the use of Nocturn AI. Our total liability shall not exceed the fees
                        paid by you in the 12 months preceding any claim.
                    </TermsSection>

                    <TermsSection title="9. Governing Law">
                        These Terms shall be governed by and construed in accordance with the laws of Malaysia.
                        Any disputes shall be subject to the exclusive jurisdiction of the courts of Malaysia.
                    </TermsSection>

                    <TermsSection title="10. Contact">
                        For questions about these Terms:
                        <br /><br />
                        Sheers Software Sdn Bhd<br />
                        Email: legal@nocturn.ai
                    </TermsSection>
                </div>
            </div>
        </section>
    );
}

function TermsSection({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <div>
            <h3 style={{ marginBottom: 8 }}>{title}</h3>
            <p>{children}</p>
        </div>
    );
}
