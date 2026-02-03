"use client";

import React, { useEffect, useRef } from "react";
import { PopupButton } from "@typeform/embed-react";

export default function TypeformEmbed() {
    const embedRef = useRef<any>(null);

    useEffect(() => {
        const handleOpen = () => {
            if (embedRef.current) {
                embedRef.current.open();
            }
        };

        window.addEventListener("open-contact-form", handleOpen);
        return () => window.removeEventListener("open-contact-form", handleOpen);
    }, []);

    return (
        <div style={{ display: 'none' }}>
            <PopupButton
                id="RvZ7SEGF"
                className="typeform-hidden-trigger"
                onReady={() => console.log("Typeform Ready")}
                embedRef={embedRef}
            >
                Hidden
            </PopupButton>
        </div>
    );
}
