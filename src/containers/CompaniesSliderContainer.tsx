import { CompaniesSlider } from "@/components/CompaniesSlider";
import clsx from "clsx";

export type CompaniesSliderContainerProps = React.HTMLProps<HTMLDivElement>

export const CompaniesSliderContainer: React.FC<CompaniesSliderContainerProps> = ({

}) => {
    return (
        <div className={clsx(
            'w-full',
            'pl-[20px] pr-[20px] md:pl-[40px] md:pr-[40px]',
        )}>
            <CompaniesSlider />
        </div>
    );
}