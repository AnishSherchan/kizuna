'use client';

import { useEffect, useState } from 'react';
import Loading from "@/app/loading";

export default function Template({ children }: { children: React.ReactNode }) {
    const [delayed, setDelayed] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setDelayed(false), 500);
        return () => clearTimeout(timer);
    }, []);

    if (delayed) {
        return (
            <Loading/>
        );
    }

    return <>{children}</>;
}
