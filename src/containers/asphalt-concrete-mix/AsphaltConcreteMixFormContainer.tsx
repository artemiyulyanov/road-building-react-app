import { AsphaltConcreteMixForm } from "@/components/forms/AsphaltConcreteMixForm";
import { PlainText } from "@/ui/PlainText";
import clsx from "clsx";

export type AsphaltConcreteMixFormContainerProps = React.HTMLProps<HTMLDivElement>

export const AsphaltConcreteMixFormContainer: React.FC<AsphaltConcreteMixFormContainerProps> = ({

}) => {
    return (
         <div 
            className={clsx(
                "w-full h-auto",
                "pl-[20px] pr-[20px] md:pl-[40px] md:pr-[40px]",
                "flex flex-col gap-6"
            )}
            id="form-container"
        >
            <div className={clsx(
                "flex flex-col gap-1"
            )}>
                <PlainText
                    textClassName={clsx(
                        "relative font-medium break-words",
                        "text-2xl md:text-xl xl:text-2xl text-light"
                    )}
                >
                    ООО «ТДС» — надёжный поставщик асфальтобетонных смесей
                </PlainText>
                <div className="space-y-2">
                    <PlainText
                        textClassName={clsx(
                            "relative opacity-40 font-medium",
                            "text-xl md:text-lg xl:text-xl  text-light"
                        )}
                    >
                        Собственное производство, современное оборудование, строгий контроль качества, соблюдение ГОСТ, опытная команда и своевременные поставки позволяют нам быть надёжным партнёром для строительных организаций и дорожных подрядчиков.
                    </PlainText>
                    <PlainText
                        textClassName={clsx(
                            "relative opacity-40 font-medium",
                            "text-xl md:text-lg xl:text-xl  text-light"
                        )}
                    >
                        Свяжитесь с нами, чтобы получить расчёт стоимости и подобрать оптимальную асфальтобетонную смесь для вашего объекта.
                    </PlainText>
                </div>
            </div>
            <AsphaltConcreteMixForm />
        </div>
    );
}