import clsx from "clsx";
import { PaintedCard } from "../PaintedCard";
import { BricksIcon } from "@/icons/BricksIcon";
import { QuadIcon } from "@/icons/QuadIcon";
import { DeliveryDarkIcon } from "@/icons/DeliveryDarkIcon";
import { SuccessMarkIcon } from "@/icons/SuccessMarkIcon";
import { BoxIcon } from "@/icons/BoxIcon";

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
                    <SuccessMarkIcon
                        contentClassName={clsx(
                            "relative h-12 lg:h-14"
                        )}
                    />
                }
                title="Поставляем свежие асфальтобетонные смеси для строительства, ремонта и содержания дорожного полотна"
                theme="transparent"
            />
            <PaintedCard 
                icon={
                    <BoxIcon
                        contentClassName={clsx(
                            "relative h-12 lg:h-14"
                        )}
                    />
                }
                title="Минимальный объём заказа — от 1,5 тонн"
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
                title="Получите актуальную стоимость за тонну и коммерческое предложение уже сегодня."
                theme="yellow"
            />
        </div>
    );
}