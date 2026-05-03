import clsx from "clsx";
import banner_desktop from '@/assets/laboratory-control-banner.png';
import banner_desktop_xl from '@/assets/laboratory-control-banner-xl.png';
import banner_mobile from '@/assets/laboratory-control-banner-mobile.png';
import { PlainText } from "@/ui/PlainText";
import { LaboratoryControlClause } from "@/components/LaboratoryControlClause";
import { useRef } from "react";
import { useAnimation } from "@/shared/useAnimation";

export type LaboratoryControlContainerProps = React.HTMLProps<HTMLDivElement>

export const LaboratoryControlContainer: React.FC<LaboratoryControlContainerProps> = ({

}) => {
    const ref = useRef<HTMLDivElement | null>(null);
    const animation = useAnimation(ref);

    return (
        <div
            className={clsx(
                "relative grid w-full"
            )}
            id="laboratory-container"
        >
            <div
                className={clsx(
                    "w-full col-start-1 row-start-1",
                    'pl-[20px] pr-[20px] md:pl-[40px] md:pr-[40px]',
                    "flex flex-col gap-20 lg:gap-36"
                )}
            >
                <div
                    ref={ref} 
                    className={clsx(
                        "w-full md:w-1/2",
                        "flex flex-col gap-2"
                    )}
                >
                    <PlainText
                        textClassName={clsx(
                            "relative font-medium break-words",
                            "text-2xl xl:text-3xl leading-[0.95] text-light"
                        )}
                    >
                        Лабораторный контроль качества и лабораторное сопровождение в дорожном строительстве
                    </PlainText>
                    <PlainText
                        textClassName={clsx(
                            "relative opacity-40 font-medium",
                            "text-lg xl:text-2xl leading-[0.95] text-light"
                        )}
                    >
                        Следим за качеством нашего асфальтного покрытия, чтобы ваши дороги были безопасными
                    </PlainText>
                </div>
                <div className={clsx(
                    "w-full h-full",
                    "flex flex-row justify-between"
                )}>
                    <div className={clsx(
                        'flex flex-col justify-between sm:justify-around gap-8 w-1/2 sm:w-2/7 lg:w-1/4 h-full'
                    )}>
                        <LaboratoryControlClause
                            // align="left"
                            items="left"
                            number="01"
                            text="Наши эксперты регулярно проводят испытания в поиске наилучших показателей дорожного полотна"
                        />
                        <LaboratoryControlClause
                            // align="left"
                            items="left"
                            number="03"
                            wrapperClassName="hidden sm:flex"
                            text="Благодаря профессионализму специалистов достигается высочайший уровень технологий, позволяющий получать композиционный материал с заранее заданными уникальными свойствами"
                        />
                    </div>
                    <div className={clsx(
                        "w-1/2 sm:w-1/4",
                        "flex flex-col justify-end gap-16 sm:justify-center"
                    )}>
                        <div className={clsx(
                            "min-h-1/2 max-h-4/7",
                            "flex flex-col gap-16"
                        )}>
                            <LaboratoryControlClause
                                // align="right"
                                items="right"
                                number="02"
                                text="Cвоевременный и поэтапный контроль избавляет в будущем от нецелесообразных затрат на вскрытие дорожной одежды"
                            />
                            <LaboratoryControlClause
                                // align="right"
                                items="left"
                                number="03"
                                wrapperClassName="sm:hidden"
                                text="Благодаря профессионализму специалистов достигается высочайший уровень технологий, позволяющий получать композиционный материал с заранее заданными уникальными свойствами"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <img 
                src={banner_desktop} 
                className="w-full h-auto col-start-1 row-start-1 object-contain hidden sm:block xl:hidden"
            />
            <img 
                src={banner_desktop_xl} 
                className="w-full h-auto col-start-1 row-start-1 object-contain hidden xl:block"
            />
            <img 
                src={banner_mobile} 
                className="w-full h-auto col-start-1 row-start-1 object-contain sm:hidden"
            />
        </div>
    );
}