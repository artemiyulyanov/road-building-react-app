import clsx from "clsx";

import banner from '@/assets/turnkey-asphalting-banner.png';
import banner_mobile from '@/assets/turnkey-asphalting-banner-mobile.png';

import { PlainText } from "@/ui/PlainText";
import { PointerButton } from "@/ui/PointerButton";
import { TurnkeyAsphaltingClause } from "@/components/TurnkeyAsphaltingClause";
import { TurnkeyAsphaltingClauseArrowIcon } from "@/icons/TurnkeyAsphaltingClauseArrowIcon";

export type TurnkeyAsphaltingContainerProps = React.HTMLProps<HTMLDivElement>

export type TurnkeyAsphaltingDekstopModeProps = React.HTMLProps<HTMLDivElement>

export type TurnkeyAsphaltingMobileModeProps = React.HTMLProps<HTMLDivElement> 

const TurnkeyAsphaltingDekstopMode: React.FC<TurnkeyAsphaltingDekstopModeProps> = ({

}) => {
    return (
        <div
            className={clsx(
                "w-full h-auto z-999",
                "flex flex-col gap-4 hidden sm:grid" 
            )}
            id="turnkey-asphalting-container"
        >
            <img 
                src={banner} 
                className="w-full h-auto col-start-1 row-start-1 object-contain hidden sm:block"
            />
            {/* <img 
                src={banner_mobile} 
                className="w-full h-auto col-start-1 row-start-1 object-contain sm:hidden"
            /> */}
            <div
                className={clsx(
                    "w-full h-full col-start-1 row-start-1",
                    'pl-[20px] pr-[20px] md:pl-[40px] md:pr-[40px]',
                    "flex flex-col justify-around gap-8"
                )}
            >
                <div className={clsx(
                    'w-full',
                    'flex flex-col gap-6'
                )}>
                    <div>
                        <PointerButton 
                            theme="light"
                            buttonClassName={clsx(
                                "text-base w-auto"
                            )}
                        >
                            <div className="w-auto text-sm">
                                Читать подробнее
                            </div>
                        </PointerButton>
                    </div>
                    <div className={clsx(
                        'w-full',
                        'flex flex-col gap-2'
                    )}>
                        <PlainText
                            textClassName={clsx(
                                "relative font-medium break-words",
                                "text-xl lg:text-2xl xl:text-3xl leading-[0.95] text-light"
                            )}
                        >
                            Асфальтирование под ключ
                        </PlainText>
                        <PlainText
                            textClassName={clsx(
                                "relative opacity-40 font-medium",
                                "text-base lg:text-lg xl:text-xl leading-[0.95] text-light text-left"
                            )}
                        >
                            Комплексные дорожные работы для вашего предприятия
                        </PlainText>
                    </div>
                </div>
                <div className={clsx(
                    "w-full flex flex-row justify-between"
                )}>
                    <div className="w-1/4">
                        <TurnkeyAsphaltingClause
                            items="left"
                            number="01"
                            text="Заполните форму о вашем заказе и предприятии ниже"
                            wrapperClassName="w-1/4"
                        />
                    </div>
                    <div className={clsx(
                        "w-1/2 h-[120%] pt-[2%]",
                        "flex flex-row items-center justify-center"
                    )}>
                        <TurnkeyAsphaltingClauseArrowIcon contentClassName="w-full h-auto z-[-1]" />
                    </div>
                    <div className={clsx(
                        "w-1/4 flex flex-col justify-center"
                    )}>
                        <TurnkeyAsphaltingClause
                            items="right"
                            number="02"
                            text="Наш менеджер перезвонит вам в ближайшее время и уточнит детали заказа"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export const TurnkeyAsphaltingMobileMode: React.FC<TurnkeyAsphaltingMobileModeProps> = ({

}) => {
    return (
        <div className={clsx(
            'w-full',
            'flex flex-col gap-4 sm:hidden'
        )}>
            <div className={clsx(
                'w-full',
                'flex flex-col gap-6',
                'pl-[20px] pr-[20px] md:pl-[40px] md:pr-[40px]',
            )}>
                <div>
                    <PointerButton 
                        theme="light"
                        buttonClassName={clsx(
                            "text-base w-auto"
                        )}
                    >
                        <div className="w-auto text-sm">
                            Читать подробнее
                        </div>
                    </PointerButton>
                </div>
                <div className={clsx(
                    'w-full',
                    'flex flex-col gap-2',
                )}>
                    <PlainText
                        textClassName={clsx(
                            "relative font-medium break-words",
                            "text-xl lg:text-2xl xl:text-3xl leading-[0.95] text-light"
                        )}
                    >
                        Асфальтирование под ключ
                    </PlainText>
                    <PlainText
                        textClassName={clsx(
                            "relative opacity-40 font-medium",
                            "text-base lg:text-lg xl:text-xl leading-[0.95] text-light text-left"
                        )}
                    >
                        Комплексные дорожные работы для вашего предприятия
                    </PlainText>
                </div>
            </div>
            <div
                className={clsx(
                    "w-full h-auto z-999",
                    "flex flex-col gap-4 grid" 
                )}
            >
                <img 
                    src={banner_mobile} 
                    className="w-full h-auto col-start-1 row-start-1 object-contain"
                />
                <div
                    className={clsx(
                        "w-full h-full col-start-1 row-start-1",
                        'pl-[20px] pr-[20px] md:pl-[40px] md:pr-[40px]',
                        "flex flex-col justify-around gap-8"
                    )}
                >
                    <div className={clsx(
                        "w-full flex flex-col gap-6 justify-between"
                    )}>
                        <div className="w-1/3">
                            <TurnkeyAsphaltingClause
                                items="left"
                                number="01"
                                text="Заполните форму о вашем заказе и предприятии ниже"
                                wrapperClassName="w-1/3"
                            />
                        </div>
                        <div className={clsx(
                            "w-full",
                            'grid'
                        )}>
                            <div className={clsx(
                                "w-full",
                                "col-start-1 row-start-1"
                            )}>
                                <div className="w-full flex flex-row justify-start">
                                    <div className="w-3/5 ml-8 z-[-1]">
                                        <TurnkeyAsphaltingClauseArrowIcon contentClassName="w-full h-auto" />
                                    </div>
                                </div>
                            </div>
                            <div className={clsx(
                                "w-full col-start-1 row-start-1"
                            )}>
                                <div className="flex flex-row justify-end">
                                    <div className="w-2/5">
                                        <TurnkeyAsphaltingClause
                                            items="right"
                                            number="02"
                                            text="Наш менеджер перезвонит вам в ближайшее время и уточнит детали заказа"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export const TurnkeyAsphaltingContainer: React.FC<TurnkeyAsphaltingContainerProps> = ({

}) => {
    return (
        <>
            <TurnkeyAsphaltingDekstopMode />
            <TurnkeyAsphaltingMobileMode />
        </>
    );
}