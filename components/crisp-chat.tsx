"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
    useEffect (() => {
        Crisp.configure("5ec20828-93dc-41c7-bd77-f066a86f89f5");
    }, [])

    return null;
}