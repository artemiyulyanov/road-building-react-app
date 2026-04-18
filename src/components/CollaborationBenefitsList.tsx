import clsx from "clsx";
import type React from "react";
import { CollaborationBenefit } from "./CollaborationBenefit";
import { BricksIcon } from "@/icons/BricksIcon";
import { QuadIcon } from "@/icons/QuadIcon";
import { DeliveryIcon } from "@/icons/DeliveryIcon";

export type CollaborationBenefitsListProps = React.HTMLProps<HTMLDivElement>

export const CollaborationBenefitsList: React.FC<CollaborationBenefitsListProps> = ({

}) => {
    return (
        <div className={clsx(
            "flex flex-col md:flex-row gap-4 w-full"
        )}>
            <CollaborationBenefit 
                icon={
                    <BricksIcon
                        contentClassName={clsx(
                            "relative h-10 md:h-12"
                        )}
                    />
                }
                title="Собственный асфальтный завод"
                description="Создаём асфальт на собственном предприятии"
                theme="transparent"
            />
            <CollaborationBenefit 
                icon={
                    <QuadIcon 
                        contentClassName={clsx(
                            "relative h-14 md:h-16"
                        )}
                    />
                }
                title="Соответствие всем стандартам ГОСТ"
                description={`Работаем в соответствие с ГОСТ\nР58406.2 — 2020г.\n9128 — 2013г.`}
                theme="light"
            />
            <CollaborationBenefit 
                icon={
                    <DeliveryIcon 
                        contentClassName={clsx(
                            "relative h-10 md:h-12"
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