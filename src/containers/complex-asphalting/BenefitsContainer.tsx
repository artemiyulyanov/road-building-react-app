import { BenefitsList } from "@/components/complex-asphalting/BenefitsList";
import { PlainText } from "@/ui/PlainText";
import clsx from "clsx";

export type BenefitsContainerProps = React.HTMLProps<HTMLDivElement> 

export const BenefitsContainer: React.FC<BenefitsContainerProps> = ({}) => {
    return (
        <div 
            className={clsx(
                "w-full h-auto",
                "pl-[20px] pr-[20px] md:pl-[40px] md:pr-[40px]"
            )}
            id="benefits-container"
        >
            <div className={clsx(
                "w-full rounded-3xl",
                "flex flex-col gap-8"
            )}>
                <PlainText
                    textClassName={clsx(
                        "relative font-medium break-words",
                        "text-2xl md:text-xl xl:text-2xl text-light"
                    )}
                >
                    ООО «ТДС» выполняет полный комплекс работ по асфальтированию объектов различного назначения. Мы берём на себя весь цикл — от подготовки основания до нанесения дорожной разметки.
                </PlainText>
                <BenefitsList />
            </div>
        </div>
    );
}