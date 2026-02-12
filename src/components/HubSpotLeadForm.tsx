"use client";

import { useEffect } from "react";
import Script from "next/script";

interface HubSpotLeadFormProps {
    onFormSubmit: () => void;
}

export function HubSpotLeadForm({ onFormSubmit }: HubSpotLeadFormProps) {
    useEffect(() => {
        const handleMessage = (event: MessageEvent) => {
            if (
                event.data.type === "hsFormCallback" &&
                event.data.eventName === "onFormSubmitted"
            ) {
                onFormSubmit();
            }
        };

        window.addEventListener("message", handleMessage);
        return () => {
            window.removeEventListener("message", handleMessage);
        };
    }, [onFormSubmit]);

    return (
        <div className="card" style={{ padding: "2rem" }}>
            <div id="hubspot-form-container"></div>
            <Script
                src="https://js-na2.hsforms.net/forms/embed/v2.js"
                strategy="lazyOnload"
                onLoad={() => {
                    // @ts-ignore
                    if (window.hbspt) {
                        // @ts-ignore
                        window.hbspt.forms.create({
                            region: "na2",
                            portalId: "243983306",
                            formId: "403564c4-547b-4907-a1a7-dd6b0e8ad6ea",
                            target: "#hubspot-form-container",
                        });
                    }
                }}
            />
        </div>
    );
}
