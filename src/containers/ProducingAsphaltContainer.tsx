import clsx from "clsx";

import banner from "@/assets/asphalt-machine.png";
import { PlainText } from "@/ui/PlainText";
import { PointerButton } from "@/ui/PointerButton";
import { Link } from "@heroui/react";

export type ProducingAsphaltContainerProps = React.HTMLProps<HTMLDivElement>

export const ProducingAsphaltContainer: React.FC<ProducingAsphaltContainerProps> = ({

}) => {
    return (
        <div
            className={clsx(
                "w-full h-auto aspect-square sm:aspect-[3/2] md:aspect-[3/1]",
                "pl-[20px] pr-[20px] md:pl-[40px] md:pr-[40px]",  
                "flex flex-col gap-4 items-center"
            )}
        >
            <div 
                className={clsx(
                    "w-full h-full bg-primary rounded-3xl overflow-hidden",
                )}
            >
                <div 
                    className={clsx(
                        "w-full h-full bg-no-repeat",
                        "flex flex-row justify-between",
                        "lg:bg-[length:120%_auto] lg:bg-[position:center_25%]",
                        "md:bg-[length:130%_auto] md:bg-[position:center_20%]",
                        "sm:bg-[length:130%_auto] sm:bg-[position:center_10%]",
                        "bg-[length:120%_auto] bg-[position:center_100%]",
                        // "bg-[length:90%_auto] bg-[position:200%_45%]"
                    )}
                    style={{
                        backgroundImage: `url(${banner})`,
                    }}
                >
                    <div className="w-full h-full p-2">
                        <div className={clsx(
                            "min-w-1/3 h-full",
                            "flex flex-col gap-4 sm:gap-6 items-left",
                        )}>
                            <div>
                                <PlainText
                                    textClassName={clsx(
                                        // "whitespace-pre",
                                        "inline-block box-border text-xs lg:text-sm font-bold",
                                        "bg-dark text-light",
                                        "pl-[15px] pr-[15px] pt-[5px] pb-[5px]",
                                        "rounded-full",
                                        "w-full sm:w-auto",
                                        "text-center sm:text-left"
                                    )}
                                >
                                    Собственный завод по производству асфальта
                                </PlainText>
                            </div>
                            <div className={clsx(
                                'flex flex-col items-left justify-between gap-8 w-3/4 sm:w-1/2 h-full'
                            )}>
                                <div className={clsx(
                                    'flex flex-col items-left gap-2 px-[10px] sm:px-[20px]'
                                )}>
                                    <PlainText
                                        textClassName={clsx(
                                            "relative font-medium break-words",
                                            "text-xl lg:text-2xl xl:text-3xl leading-[0.95] text-dark text-left"
                                        )}
                                    >
                                        Производим асфальт на заказ
                                    </PlainText>
                                    <PlainText
                                        textClassName={clsx(
                                            "relative opacity-50 font-medium",
                                            "text-base lg:text-lg xl:text-xl leading-[0.95] text-dark text-left"
                                        )}
                                    >
                                        Заполните форму и получите индивидуальную консультацию от нашего менеджера по асфальту для вашего предприятия
                                    </PlainText>
                                </div>
                            </div>
                            <Link 
                                href="#turnkey-asphalting-form"
                                className="no-underline text-inherit"
                            >
                                <PointerButton 
                                    theme="dark"
                                    buttonClassName={clsx(
                                        "text-base w-full sm:w-auto"
                                    )}
                                >
                                    <div className="w-full sm:w-auto text-sm">
                                        Оставить заявку
                                    </div>
                                </PointerButton>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            
            
            {/* <div
                className={clsx(
                    "w-full h-full rounded-3xl",
                    "bg-primary"
                )}
            >
                <div 
                    className={clsx(
                        "w-full h-full p-2",
                        "bg-cover bg-center",
                        "flex flex-col gap-8"
                    )}
                    style={{
                        backgroundImage: `url(${banner})`,
                    }}
                >
                    <div>
                        <PlainText
                            textClassName={clsx(
                                // "whitespace-pre",
                                "inline-block box-border text-xs lg:text-sm font-medium",
                                "bg-dark text-light",
                                "pl-[15px] pr-[15px] pt-[5px] pb-[5px]",
                                "rounded-full"
                            )}
                        >
                            Собственный завод по производству асфальта
                        </PlainText>
                    </div>
                    <div className={clsx(
                        'flex flex-col gap-2 px-[20px] w-1/3'
                    )}>
                        <PlainText
                            textClassName={clsx(
                                "relative font-medium break-words",
                                "text-2xl xl:text-3xl leading-[0.95] text-dark"
                            )}
                        >
                            Производим асфальт на заказ
                        </PlainText>
                        <PlainText
                            textClassName={clsx(
                                "relative opacity-50 font-medium",
                                "text-base xl:text-xl leading-[0.95] text-dark"
                            )}
                        >
                            Следим за качеством нашего асфальтного покрытия, чтобы ваши дороги были безопасными
                        </PlainText>
                    </div>
                </div>
            </div> */}
        </div>
    );
}