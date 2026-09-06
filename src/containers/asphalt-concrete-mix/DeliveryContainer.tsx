import { DeliveryLightIcon } from "@/icons/DeliveryLightIcon";
import { PlainText } from "@/ui/PlainText";
import clsx from "clsx";

export type DeliveryContainerProps = React.HTMLProps<HTMLDivElement>

export const DeliveryContainer: React.FC<DeliveryContainerProps> = ({}) => {
    return (
        <div
            className={clsx(
                "w-full h-auto",
                "pl-[20px] pr-[20px] md:pl-[40px] md:pr-[40px]",
                "flex flex-col gap-6"
            )}
            id="delivery-container"
        >
            <DeliveryLightIcon
                contentClassName={clsx(
                    "relative h-10 lg:h-12"
                )}
            />
            <div className={clsx(
                "flex flex-col gap-4"
            )}>
                <div className={clsx(
                    "flex flex-col gap-1"
                )}>
                    <PlainText
                        textClassName={clsx(
                            "relative font-medium break-words",
                            "text-2xl md:text-xl xl:text-2xl text-light"
                        )}
                    >
                        Доставка собственным транспортом
                    </PlainText>
                    <PlainText
                        textClassName={clsx(
                            "relative opacity-40 font-medium whitespace-pre-line",
                            "text-xl/6 md:text-lg/6 xl:text-xl/6 leading-[1.2] text-light"
                        )}
                    >
                        {`Стоимость доставки рассчитывается индивидуально и зависит от:
                        \u00A0\u00A0• расстояния до объекта;
                        \u00A0\u00A0• объёма поставки;
                        \u00A0\u00A0• количества рейсов;
                        \u00A0\u00A0• особенностей маршрута.`}
                    </PlainText>
                </div>
                <PlainText
                    textClassName={clsx(
                        "relative h-auto font-medium",
                        " text-light text-primary"
                    )}
                >
                    Возможен самовывоз
                </PlainText>
            </div>
        </div>
    );
}