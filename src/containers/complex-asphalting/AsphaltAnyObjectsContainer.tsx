import { AdvantagesList } from "@/components/trusted-facility/AdvantagesList";
import { BigRoadBanner } from "@/icons/BigRoadBanner";
import { LargeLogoIcon } from "@/icons/LargeLogoIcon";
import { PlainText } from "@/ui/PlainText";
import clsx from "clsx";

export type AsphaltAnyObjectsContainerProps = React.HTMLProps<HTMLDivElement>

export const AsphaltAnyObjectsContainer: React.FC<AsphaltAnyObjectsContainerProps> = ({

}) => {
    return (
        <div 
            className={clsx(
                "w-full h-auto",
                "pl-[20px] pr-[20px] md:pl-[40px] md:pr-[40px]",
                "flex flex-col gap-8"
            )}
            id="asphalt-any-objects-container"
        >
            <div 
                className={clsx(
                    "w-full h-auto",
                    "flex flex-col gap-6"
                )}
            >
                <div className={clsx(
                    "flex flex-col h-auto gap-1"
                )}>
                    <PlainText
                        textClassName={clsx(
                            "relative font-medium break-words",
                            "text-2xl md:text-xl xl:text-2xl text-light"
                        )}
                    >
                        Выполняем асфальтирование любых объектов    
                    </PlainText>
                    <PlainText
                        textClassName={clsx(
                            "relative opacity-40 font-medium",
                            "text-2xl md:text-lg xl:text-xl  text-light"
                        )}
                    >
                        Работаем с коммерческими, промышленными, государственными и частными заказчиками. Мы выполняем асфальтирование:
                    </PlainText>
                </div>
            </div>
            <BigRoadBanner 
                contentClassName={clsx(
                    "relative w-full"
                )}
            />
        </div>
    );
}