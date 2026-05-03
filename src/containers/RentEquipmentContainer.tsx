import clsx from "clsx"

import banner from '@/assets/rent-equipment-banner.png';
import { PlainText } from "@/ui/PlainText";
import { ServicesList } from "@/components/ServicesList";

export type RentEquipmentContainerProps = React.HTMLProps<HTMLDivElement>

export const RentEquipmentContainer: React.FC<RentEquipmentContainerProps> = ({

}) => {
    return (
        <div
            className={clsx(
                "grid w-full h-auto z-999",
                "flex flex-col gap-4" 
            )}
            id="rent-equipment-container"
        >
            <img 
                src={banner} 
                className="w-full h-auto col-start-1 row-start-1 object-contain"
            />
            <div
                className={clsx(
                    "w-full col-start-1 row-start-1",
                    'pl-[20px] pr-[20px] md:pl-[40px] md:pr-[40px]',
                    "flex flex-col gap-4 lg:gap-6"
                )}
            >
                <div className={clsx(
                    'w-full',
                    'flex flex-col gap-2'
                )}>
                    <PlainText
                        textClassName={clsx(
                            "relative font-medium break-words",
                            "text-2xl xl:text-3xl leading-[0.95] text-light"
                        )}
                    >
                        Аренда спецтехники
                    </PlainText>
                    <PlainText
                        textClassName={clsx(
                            "relative opacity-40 font-medium",
                            "text-base lg:text-lg xl:text-xl leading-[0.95] text-light text-left"
                        )}
                    >
                        На любой цвет и вкус
                    </PlainText>
                </div>
                <ServicesList />
            </div>
        </div>
    );
}