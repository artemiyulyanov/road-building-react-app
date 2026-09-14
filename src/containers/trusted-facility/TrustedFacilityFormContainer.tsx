import { TrustedFacilityForm } from "@/components/forms/TrustedFacilityForm";
import { PlainText } from "@/ui/PlainText";
import clsx from "clsx";

export type TrustedFacilityFormContainerProps = React.HTMLProps<HTMLDivElement>

export const TrustedFacilityFormContainer: React.FC<TrustedFacilityFormContainerProps> = ({

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
                    ООО «ТДС» — надёжный партнёр в дорожном строительстве
                </PlainText>
                <div className="space-y-2">
                    <PlainText
                        textClassName={clsx(
                            "relative opacity-40 font-medium",
                            "text-xl md:text-lg xl:text-xl  text-light"
                        )}
                    >
                        Собственный парк современной техники, опытные специалисты, оперативная подача и высокий уровень сервиса позволяют нашим клиентам выполнять работы без простоев и точно в срок.
                    </PlainText>
                    <PlainText
                        textClassName={clsx(
                            "relative opacity-40 font-medium",
                            "text-xl md:text-lg xl:text-xl  text-light"
                        )}
                    >
                        Оставьте заявку — мы подберём необходимую технику и подготовим выгодное коммерческое предложение.
                    </PlainText>
                </div>
            </div>
            <TrustedFacilityForm />
        </div>
    );
}