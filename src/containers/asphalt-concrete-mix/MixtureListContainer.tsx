import { BenefitsList } from "@/components/asphalt-concrete-mix/BenefitsList";
import { MixtureListTable } from "@/components/asphalt-concrete-mix/MixtureListTable";
import { PlainText } from "@/ui/PlainText";
import clsx from "clsx";

export type MixtureListContainerProps = React.HTMLProps<HTMLDivElement>

export const MixtureListContainer: React.FC<MixtureListContainerProps> = ({

}) => {
    return (
        <div 
            className={clsx(
                "w-full h-auto",
                "pl-[20px] pr-[20px] md:pl-[40px] md:pr-[40px]"
            )}
            id="mixture-list-container"
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
                        Производим полный ассортимент асфальтобетонных смесей
                    </PlainText>
                    <PlainText
                        textClassName={clsx(
                            "relative opacity-40 font-medium",
                            "text-xl md:text-lg xl:text-xl text-light"
                        )}
                    >
                        Вся продукция выпускается в строгом соответствии с требованиями ГОСТ
                    </PlainText>
                </div>
                <MixtureListTable />
            </div>
        </div>
    );
}