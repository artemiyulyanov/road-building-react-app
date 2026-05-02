import type { Service } from "@/entities/service";
import { BaseButton } from "@/ui/BaseButton";
import { PlainText } from "@/ui/PlainText";
import clsx from "clsx";

export type ServiceCardProps = React.HTMLProps<HTMLDivElement> & {
    service: Service
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
    service
}) => {
    return (
        <div className={clsx(
            'w-full bg-dark-3 p-2 rounded-3xl',
            'flex flex-col sm:flex-row gap-4 justify-between',
            'transition-all duration-200',
            'hover:scale-[1.015]'
        )}>
            <div className={clsx(
                'flex flex-col sm:flex-row gap-2'
            )}>
                <div
                    className="w-full sm:min-w-36 sm:max-w-36 aspect-[5/4]"
                >
                    <img 
                        className="w-full h-full object-cover rounded-3xl"
                        src={service.iconPath}
                    />
                </div>
                <div className={clsx(
                    'flex flex-col gap-1 p-1'
                )}>
                    <PlainText
                        textClassName={clsx(
                            "relative font-medium break-words",
                            "text-base md:text-lg leading-[0.95] text-light"
                        )}
                    >
                        {service.title}
                    </PlainText>
                    <PlainText
                        textClassName={clsx(
                            "relative opacity-40 font-medium",
                            "text-sm md:text-base leading-[0.95] text-light text-left"
                        )}
                    >
                        {service.description}
                    </PlainText>
                </div>
            </div>
            <div>
                <BaseButton 
                    theme="light"
                    buttonClassName={clsx(
                        "w-full sm:w-auto",
                        "px-[15px] py-[10px] sm:px-[10px] sm:py-[5px]",
                    )}
                >
                    <div className="text-sm sm:text-xs md:text-sm">Узнать подробнее</div>
                </BaseButton>
            </div>
        </div>
    );
}