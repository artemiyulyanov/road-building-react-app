import clsx from "clsx";
import { Faq } from "../../ui/faq/Faq";
import { FaqHeader } from "../../ui/faq/FaqHeader";
import { FaqAccordion, type FaqAccordionData } from "../../ui/faq/FaqAccordion";
import { useState } from "react";

export type ComplexAsphaltingFaqProps = React.HTMLProps<HTMLDivElement>

export const questions: Array<FaqAccordionData> = [
    {
        "slug": "question-1",
        "title": "Вопрос №1",
        "answer": "-"
    },
    {
        "slug": "question-2",
        "title": "Вопрос №2",
        "answer": "-"
    },
    {
        "slug": "question-3",
        "title": "Вопрос №3",
        "answer": "-"
    },
    {
        "slug": "question-4",
        "title": "Вопрос №4",
        "answer": "-"
    },
];

export const ComplexAsphaltingFaq: React.FC<ComplexAsphaltingFaqProps> = ({}) => {
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