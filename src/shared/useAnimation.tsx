"use client";

import { animate } from "animejs";
import { useEffect, useRef } from "react";

// temporarily not working

export const useAnimation = (ref: React.RefObject<HTMLDivElement | null>) => {
    const animated = useRef(false);

    // useEffect(() => {
    //     const el = ref.current;
    //     if (!el) return;

    //     const observer = new IntersectionObserver(([entry]) => {
    //         if (entry.isIntersecting && !animated.current) {
    //             animated.current = true;

    //             animate(el, {
    //                 opacity: [0, 1],
    //                 translateY: [40, 0],
    //                 easing: "easeOutQuad",
    //                 duration: 800,
    //             });

    //             observer.unobserve(el);
    //         }
    //     });

    //     observer.observe(el);

    //     return () => observer.disconnect();
    // }, []);
}