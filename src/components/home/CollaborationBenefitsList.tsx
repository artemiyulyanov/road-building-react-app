import clsx from "clsx";
import type React from "react";
import { PaintedCard } from "../PaintedCard";
import { BricksIcon } from "@/icons/BricksIcon";
import { QuadIcon } from "@/icons/QuadIcon";
import { DeliveryDarkIcon } from "@/icons/DeliveryDarkIcon";

export type CollaborationBenefitsListProps = React.HTMLProps<HTMLDivElement>

export const CollaborationBenefitsList: React.FC<CollaborationBenefitsListProps> = ({
    ...props
}) => {
    return (
        <div 
            className={clsx(
                "flex flex-col md:flex-row gap-4 w-full"
            )}
            {...props}
        >
            <PaintedCard 
                icon={
                    <BricksIcon
                        contentClassName={clsx(
                            "relative h-10 lg:h-12"
                        )}
                    />
                }
                title="Собственный асфальтный завод"
                description="Создаём асфальт на собственном предприятии"
                theme="transparent"
            />
            <PaintedCard 
                icon={
                    <QuadIcon 
                        contentClassName={clsx(
                            "relative h-14 lg:h-16"
                        )}
                    />
                }
                title="Соответствие всем стандартам ГОСТ"
                description={`Работаем в соответствие с ГОСТ\nР58406.2 — 2020г.\n9128 — 2013г.`}
                theme="light"
            />
            <PaintedCard 
                icon={
                    <DeliveryDarkIcon 
                        contentClassName={clsx(
                            "relative h-10 lg:h-12"
                        )}
                    />
                }
                title="Доставка от 10 тонн с возможностью самовывоза"
                description="Организуем грузоперевозки по всей России"
                theme="yellow"
            />
        </div>
    );
}