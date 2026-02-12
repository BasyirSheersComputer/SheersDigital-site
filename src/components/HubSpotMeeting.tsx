"use client";

import Script from "next/script";

export function HubSpotMeeting() {
    return (
        <>
            <div
                className="meetings-iframe-container"
                data-src="https://meetings-na2.hubspot.com/ahmad-basyir/nocturn-ai-discovery-meeting?embed=true"
                style={{ width: "100%", minHeight: "700px" }} // Increased height for better visibility
            ></div>
            <Script
                src="https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js"
                strategy="lazyOnload"
            />
        </>
    );
}
