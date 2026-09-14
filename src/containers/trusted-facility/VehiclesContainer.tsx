import { EarthmovingEquipmentTable } from "@/components/trusted-facility/EarthmovingEquipmentTable";
import { PaversTable } from "@/components/trusted-facility/PaversTable";
import { RinksTable } from "@/components/trusted-facility/RinksTable";
import { SpecialEquipmentTable } from "@/components/trusted-facility/SpecialEquipmentTable";
import { PlainText } from "@/ui/PlainText";
import clsx from "clsx";

export type VehiclesContainerProps = React.HTMLProps<HTMLDivElement>

export const VehiclesContainer: React.FC<VehiclesContainerProps> = ({

}) => {
    return (
        <div 
            className={clsx(
                "w-full h-auto",
                "pl-[20px] pr-[20px] md:pl-[40px] md:pr-[40px]"
            )}
            id="vehicles-container"
        >
            <div className={clsx(
                "w-full rounded-3xl",
                "flex flex-col gap-8"
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
                        Наш парк техники
                    </PlainText>
                    <PlainText
                        textClassName={clsx(
                            "relative opacity-40 font-medium",
                            "text-xl md:text-lg xl:text-xl text-light"
                        )}
                    >
                        Предлагаем в аренду:
                    </PlainText>
                </div>
                <PaversTable />
                <RinksTable />
                <EarthmovingEquipmentTable />
                <SpecialEquipmentTable />
            </div>
        </div>
    );
}