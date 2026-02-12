"use client";

import { useEffect } from "react";

export function HubSpotMeeting() {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js";
        script.type = "text/javascript";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div
            className="meetings-iframe-container"
            data-src="https://meetings-na2.hubspot.com/ahmad-basyir/nocturn-ai-discovery-meeting?embed=true"
            style={{ width: "100%", minHeight: "600px" }} // Explicit height to prevent layout shift before load
        ></div>
    );
}
