"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
    useEffect(()=>{
        Crisp.configure("1fea5dbb-6132-4980-a514-a4d8bbe60f8e")
    },[])
    return null;
}
