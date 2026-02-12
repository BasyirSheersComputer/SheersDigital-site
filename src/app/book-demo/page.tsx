"use client";

import { useState } from "react";
import { LeadForm } from "@/components/LeadForm";
import { HubSpotModal } from "@/components/HubSpotModal";

export default function BookDemoPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section style={{ paddingTop: 100, paddingBottom: 80, minHeight: "100vh", background: "var(--color-gray-50)" }}>
            <div className="container">
                <div className="grid-2-cols stack-on-mobile" style={{ maxWidth: 1000, margin: "0 auto" }}>
                    {/* Left - Value */}
                    <div style={{ paddingTop: 40 }}>
                        <h1>See Your Revenue Recovery in Action</h1>
                        <p className="text-large text-gray-600" style={{ marginBottom: 32 }}>
                            Join forward-thinking hotels using AI to capture every inquiry, 24/7.
                        </p>

                        <ul className="check-list" style={{ marginBottom: 40, listStyle: "none", padding: 0 }}>
                            <li style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 16 }}>
                                <span style={{ color: "var(--color-green)", fontWeight: 700, fontSize: 18 }}>✓</span>
                                <span>Stop losing leads to slow response times</span>
                            </li>
                            <li style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 16 }}>
                                <span style={{ color: "var(--color-green)", fontWeight: 700, fontSize: 18 }}>✓</span>
                                <span>Automate responses on WhatsApp & Email</span>
                            </li>
                            <li style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 16 }}>
                                <span style={{ color: "var(--color-green)", fontWeight: 700, fontSize: 18 }}>✓</span>
                                <span>Track every dollar of recovered revenue</span>
                            </li>
                        </ul>

                        <div className="trust-badges">
                            <p className="text-small text-gray-500" style={{ marginBottom: 16 }}>Trusted by revenue leaders in Malaysia</p>
                            {/* Add logos/social proof here if available */}
                        </div>
                    </div>

                    {/* Right - Form */}
                    <div>
                        <LeadForm onSuccess={() => setIsModalOpen(true)} />
                    </div>
                </div>
            </div>

            <HubSpotModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </section>
    );
}
