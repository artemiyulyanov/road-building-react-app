import { AdvantagesList } from "@/components/complex-asphalting/AdvantagesList";
import { LargeLogoIcon } from "@/icons/LargeLogoIcon";
import { PlainText } from "@/ui/PlainText";
import clsx from "clsx";

export type AdvantagesContainerProps = React.HTMLProps<HTMLDivElement>

export const AdvantagesContainer: React.FC<AdvantagesContainerProps> = ({

}) => {
    return (
        <div 
            className={clsx(
                "w-full h-auto",
                "pl-[20px] pr-[20px] md:pl-[40px] md:pr-[40px]",
                "flex flex-col gap-8"
            )}
            id="advantages-container"
        >
            <div 
                className={clsx(
                    "w-full h-auto",
                    "flex flex-col gap-6"
                )}
            >
                <LargeLogoIcon 
                    className={clsx(
                        "relative w-48 md:w-54"
                    )}
                />
                <div className={clsx(
                    "flex flex-col h-auto gap-1"
                )}>
                    <PlainText
                        textClassName={clsx(
                            "relative font-medium break-words",
                            "text-2xl md:text-xl xl:text-2xl text-light"
                        )}
                    >
                        Почему выбирают ООО «ТДС»
                    </PlainText>
                    <PlainText
                        textClassName={clsx(
                            "relative opacity-40 font-medium",
                            "text-2xl md:text-lg xl:text-xl  text-light"
                        )}
                    >
                        Наша деятельность в фактах
                    </PlainText>
                </div>
            </div>
            <AdvantagesList />
        </div>
    );
}