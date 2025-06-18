"use client";
import React from "react";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import NotFound from "@/public/assets/animation/NotFound.json";

const NotFoundLottie = () => {
    return (
        <Lottie style={{ height: 250, width: 250 }} animationData={NotFound} />
    );
};

export default NotFoundLottie;
