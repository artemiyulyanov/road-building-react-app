import { ComplexAsphaltingFaq } from "@/components/complex-asphalting/ComplexAsphaltingFaq";
import clsx from "clsx";

export type ComplexAsphaltingFaqContainerProps = React.HTMLProps<HTMLDivElement>

export const ComplexAsphaltingFaqContainer: React.FC<ComplexAsphaltingFaqContainerProps> = ({}) => {
    return (
        <div 
            className={clsx(
                "w-full h-auto",
                "pl-[20px] pr-[20px] md:pl-[40px] md:pr-[40px]",
                "flex flex-col gap-4"
            )}
            id="faq-container"
        >
            <ComplexAsphaltingFaq />
        </div>
    );
}