import { TrustedFacilityFaq } from "@/components/trusted-facility/TrustedFacilityFaq";
import clsx from "clsx";

export type TrustedFacilityFaqContainerProps = React.HTMLProps<HTMLDivElement>

export const TrustedFacilityFaqContainer: React.FC<TrustedFacilityFaqContainerProps> = ({}) => {
    return (
        <div 
            className={clsx(
                "w-full h-auto",
                "pl-[20px] pr-[20px] md:pl-[40px] md:pr-[40px]",
                "flex flex-col gap-4"
            )}
            id="faq-container"
        >
            <TrustedFacilityFaq />
        </div>
    );
}