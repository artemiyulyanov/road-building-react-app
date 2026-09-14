import { ClockLightIcon } from "@/icons/ClockLightIcon";
import { LargeDigitWithPointIcon } from "@/icons/LargeDigitWithPointIcon";
import { PlainText } from "@/ui/PlainText";
import clsx from "clsx";

export type DealineContainerProps = React.HTMLProps<HTMLDivElement>

export const DealineContainer: React.FC<DealineContainerProps> = ({}) => {
    return (
        <div
            className={clsx(
                "w-full h-auto",
                "pl-[20px] pr-[20px] md:pl-[40px] md:pr-[40px]",
                "flex flex-col gap-6"
            )}
            id="deadline-container"
        >
            <ClockLightIcon
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
                    Сроки выполнения
                </PlainText>
                <PlainText
                    textClassName={clsx(
                        "relative opacity-40 font-medium",
                        "text-xl md:text-lg xl:text-xl  text-light"
                    )}
                >
                    Срок выполнения определяется индивидуально и устанавливается в графике производства работ. Благодаря собственному производству асфальта, специализированной технике и опытным дорожным бригадам мы обеспечиваем непрерывное выполнение работ и строго соблюдаем согласованный график.
                </PlainText>
            </div>
        </div>
    );
}