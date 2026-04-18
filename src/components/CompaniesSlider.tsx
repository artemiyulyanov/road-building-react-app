import { useEffect, useRef, useState } from "react";

import vis_group_icon from '@/assets/vis-group-icon.png';
import sibeco_icon from '@/assets/sibeco-icon.png';
import blossom_icon from '@/assets/blossom-icon.png';
import swifts_group_icon from '@/assets/swifts-group-icon.png';

export type CompaniesSliderProps = React.HTMLProps<HTMLDivElement>

export const CompaniesSlider: React.FC<CompaniesSliderProps> = ({

}) => {
    const trackRef = useRef<HTMLDivElement>(null);

    const speed = useRef(0.5);
    const targetSpeed = useRef(0.5);

    const items = [
        vis_group_icon,
        sibeco_icon,
        blossom_icon,
        swifts_group_icon
    ];

    const loopItems = [...items, ...items, ...items, ...items, ...items, ...items, ...items, ...items];
    
    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;

        let position = 0;
        let frame: number;

        const animate = () => {
        speed.current += (targetSpeed.current - speed.current) * 0.05;

        const width = track.scrollWidth / 2;
            if (width === 0) return;

            position = ((position - speed.current) % width + width) % width;

            track.style.transform = `translateX(${-position}px)`;

            frame = requestAnimationFrame(animate);
        };

        animate();

        return () => cancelAnimationFrame(frame);
    }, []);

    return (
        <div
            className="overflow-hidden"
            onMouseEnter={() => (targetSpeed.current = 2)}
            onMouseLeave={() => (targetSpeed.current = 0.5)}
        >
            <div ref={trackRef} className="flex gap-2 md:gap-4">
                {loopItems.map((src, i) => (
                    <img src={src} className="w-18 md:w-24 aspect-square object-contain" />
                ))}
            </div>
        </div>
    );
}