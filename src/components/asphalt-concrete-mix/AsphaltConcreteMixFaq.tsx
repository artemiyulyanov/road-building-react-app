import clsx from "clsx";
import { Faq } from "../../ui/faq/Faq";
import { FaqHeader } from "../../ui/faq/FaqHeader";
import { FaqAccordion, type FaqAccordionData } from "../../ui/faq/FaqAccordion";
import { useState } from "react";

export type AsphaltConcreteMixFaqProps = React.HTMLProps<HTMLDivElement>

export const questions: Array<FaqAccordionData> = [
    {
        "slug": "min-batch",
        "title": "Какая минимальная партия?",
        "answer": "-"
    },
    {
        "slug": "cooperate-with-legal-entities",
        "title": "Работаете ли с юридическими лицами?",
        "answer": "-"
    },
    {
        "slug": "can-order-delivery",
        "title": "Можно ли заказать доставку?",
        "answer": "-"
    },
    {
        "slug": "find-out-cost",
        "title": "Как узнать стоимость?",
        "answer": "-"
    }
];

export const AsphaltConcreteMixFaq: React.FC<AsphaltConcreteMixFaqProps> = ({}) => {
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