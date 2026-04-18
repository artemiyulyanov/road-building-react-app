import { CollaborationBenefitsList } from "@/components/CollaborationBenefitsList";
import { ThunderboltIcon } from "@/icons/ThunderboltIcon";
import { PlainText } from "@/ui/PlainText";
import clsx from "clsx";

export type CollaborationContainerProps = React.HTMLProps<HTMLDivElement>

export const CollaborationContainer: React.FC<CollaborationContainerProps> = ({

}) => {
    return (
        <div className={clsx(
            "pl-[20px] pr-[20px] md:pl-[40px] md:pr-[40px] w-full",
            "flex flex-col gap-4 md:gap-6"
        )}>
            <div className="flex flex-row items-center gap-2">
                <ThunderboltIcon 
                    contentClassName="w-2 h-auto"
                />
                <PlainText
                    textClassName={clsx(
                        "text-lg md:text-xl font-bold",
                        "text-light text-center leading-[0.95]"
                    )}
                >
                    Работа с нами — это
                </PlainText>
            </div>
            <CollaborationBenefitsList />
        </div>
    );
}