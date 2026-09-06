import clsx from "clsx";
import { FaqAccordion, type FaqAccordionData } from "./FaqAccordion";
import { useState } from "react";

export type FaqProps = React.HTMLProps<HTMLDivElement> & {
    items: Array<FaqAccordionData>
}

export const Faq: React.FC<FaqProps> = ({
    children,
    items
}) => {
    const [target, setTarget] = useState<string>("");
    
    return (
        <div className={clsx(
            "w-full flex flex-col h-auto",
        )}>
            {children}
            {items.map(item =>
                <FaqAccordion
                    title={item.title}
                    selected={target == item.slug}
                    onClick={() => setTarget(item.slug)}
                    key={item.slug}
                >
                    {item.answer}
                </FaqAccordion>
            )}
        </div>
    );
}