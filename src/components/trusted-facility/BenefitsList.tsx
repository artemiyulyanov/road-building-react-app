import clsx from "clsx";
import { PaintedCard } from "../PaintedCard";
import { SuccessMarkIcon } from "@/icons/SuccessMarkIcon";
import { BoxIcon } from "@/icons/BoxIcon";
import { DeliveryDarkIcon } from "@/icons/DeliveryDarkIcon";
import { FlagIcon } from "@/icons/FlagIcon";
import { RoadIcon } from "@/icons/RoadIcon";
import { WrenchIcon } from "@/icons/WrenchIcon";
import { ClockLightIcon } from "@/icons/ClockLightIcon";
import { ClockDarkIcon } from "@/icons/ClockDarkIcon";

export type BenefitsListProps = React.HTMLProps<HTMLDivElement>

export const BenefitsList: React.FC<BenefitsListProps> = ({
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
                    <RoadIcon
                        contentClassName={clsx(
                            "relative h-12 lg:h-14"
                        )}
                    />
                }
                title="Закроем любой спектр задач от благоустройства дворов до строительства автомобильных дорог"
                theme="transparent"
            />
            <PaintedCard 
                icon={
                    <WrenchIcon
                        contentClassName={clsx(
                            "relative h-12 lg:h-14"
                        )}
                    />
                }
                title="Исправная техника и профессиональные машинисты"
                theme="light"
            />
            <PaintedCard 
                icon={
                    <ClockDarkIcon
                        contentClassName={clsx(
                            "relative h-10 lg:h-12"
                        )}
                    />
                }
                title="Минимальный срок аренды — 10 часов"
                theme="yellow"
            />
        </div>
    );
}