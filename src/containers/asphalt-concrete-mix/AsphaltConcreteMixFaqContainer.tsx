import { AsphaltConcreteMixFaq } from "@/components/asphalt-concrete-mix/AsphaltConcreteMixFaq";
import clsx from "clsx";

export type AsphaltConcreteMixFaqContainerProps = React.HTMLProps<HTMLDivElement>

export const AsphaltConcreteMixFaqContainer: React.FC<AsphaltConcreteMixFaqContainerProps> = ({}) => {
    return (
        <div 
            className={clsx(
                "w-full h-auto",
                "pl-[20px] pr-[20px] md:pl-[40px] md:pr-[40px]",
                "flex flex-col gap-4"
            )}
            id="faq-container"
        >
            <AsphaltConcreteMixFaq />
        </div>
    );
}