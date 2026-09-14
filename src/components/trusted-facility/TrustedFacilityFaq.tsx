import clsx from "clsx";
import { Faq } from "../../ui/faq/Faq";
import { FaqHeader } from "../../ui/faq/FaqHeader";
import { FaqAccordion, type FaqAccordionData } from "../../ui/faq/FaqAccordion";
import { useState } from "react";

export type TrustedFacilityFaqProps = React.HTMLProps<HTMLDivElement>

export const questions: Array<FaqAccordionData> = [
    {
        "slug": "rent-without-operator",
        "title": "Можно ли арендовать технику без оператора?",
        "answer": "-"
    },
    {
        "slug": "find-out-cost",
        "title": "Как узнать стоимость?",
        "answer": "-"
    },
    {
        "slug": "order-multiple-units",
        "title": "Можно заказать несколько единиц техники одновременно?",
        "answer": "-"
    },
    {
        "slug": "work-with-private-clients",
        "title": "Работаете ли с частными заказчиками?",
        "answer": "-"
    }
];

export const TrustedFacilityFaq: React.FC<TrustedFacilityFaqProps> = ({}) => {
    return (
        <div className={clsx(
            "flex flex-col gap-6"
        )}>
            <Faq
                items={questions}
            >
                <FaqHeader>FAQ</FaqHeader>
            </Faq>
        </div>
    );
}