import { ComplexAsphaltingForm } from "@/components/forms/ComplexAsphaltingForm";
import { PlainText } from "@/ui/PlainText";
import clsx from "clsx";

export type ComplexAsphaltingFormContainerProps = React.HTMLProps<HTMLDivElement>

export const ComplexAsphaltingFormContainer: React.FC<ComplexAsphaltingFormContainerProps> = ({

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
                    ООО «ТДС» — надёжный подрядчик по дорожному строительству
                </PlainText>
                <div className="space-y-2">
                    <PlainText
                        textClassName={clsx(
                            "relative opacity-40 font-medium",
                            "text-xl md:text-lg xl:text-xl  text-light"
                        )}
                    >
                        Мы выполняем асфальтирование объектов любого уровня сложности, строго соблюдая технологии, сроки и договорные обязательства.
                    </PlainText>
                    <PlainText
                        textClassName={clsx(
                            "relative opacity-40 font-medium",
                            "text-xl md:text-lg xl:text-xl  text-light"
                        )}
                    >
                        Оставьте заявку прямо сейчас — наш инженер бесплатно выедет на объект, проведёт необходимые замеры и подготовит подробную смету.
                    </PlainText>
                </div>
            </div>
            <ComplexAsphaltingForm />
        </div>
    );
}