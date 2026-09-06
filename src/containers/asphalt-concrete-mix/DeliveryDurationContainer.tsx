import { ClockIcon } from "@/icons/ClockIcon";
import { LargeDigitWithPointIcon } from "@/icons/LargeDigitWithPointIcon";
import { PlainText } from "@/ui/PlainText";
import clsx from "clsx";

export type DeliveryDurationContainerProps = React.HTMLProps<HTMLDivElement>

export const DeliveryDurationContainer: React.FC<DeliveryDurationContainerProps> = ({}) => {
    return (
        <div
            className={clsx(
                "w-full h-auto",
                "pl-[20px] pr-[20px] md:pl-[40px] md:pr-[40px]",
                "flex flex-col gap-6"
            )}
        >
            <ClockIcon
                contentClassName={clsx(
                    "relative h-10 lg:h-12"
                )}
            />
            <div className={clsx(
                "flex flex-col gap-1"
            )}>
                <PlainText
                    textClassName={clsx(
                        "relative font-medium break-words",
                        "text-2xl md:text-xl xl:text-2xl text-light"
                    )}
                >
                    Сроки отгрузки
                </PlainText>
                <PlainText
                    textClassName={clsx(
                        "relative opacity-40 font-medium",
                        "text-xl md:text-lg xl:text-xl  text-light"
                    )}
                >
                    Для обеспечения бесперебойного производства просим размещать заявку не позднее чем за один день до планируемой отгрузки. Это позволяет подготовить необходимый объём смеси и обеспечить своевременную поставку.
                </PlainText>
            </div>
        </div>
    );
}