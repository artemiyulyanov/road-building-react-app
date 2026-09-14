import { EarthIcon } from "@/icons/EarthIcon";
import { LargeLogoIcon } from "@/icons/LargeLogoIcon";
import { PlainText } from "@/ui/PlainText";
import clsx from "clsx";

export type ZoneOfWorkContainerProps = React.HTMLProps<HTMLDivElement>

export const ZoneOfWorkContainer: React.FC<ZoneOfWorkContainerProps> = ({

}) => {
    return (
        <div 
            className={clsx(
                "w-full h-auto",
                "pl-[20px] pr-[20px] md:pl-[40px] md:pr-[40px]",
                "flex flex-col gap-8"
            )}
            id="zone-of-work-container"
        >
            <div 
                className={clsx(
                    "w-full h-auto",
                    "flex flex-col gap-6"
                )}
            >
                <EarthIcon
                    contentClassName={clsx(
                        "relative h-12 lg:h-14"
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
                        Работаем на территории города Новосибирска и Новосибирской области
                    </PlainText>
                </div>
            </div>
        </div>
    );
}