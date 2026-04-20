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
                "relative w-full flex"
            )}
        >
            <div
                className={clsx(
                    "w-full h-full absolute",
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
                            "relative opacity-50 font-medium",
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
                        'flex flex-col justify-around gap-8 w-2/7 lg:w-1/4 h-full'
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
                        "w-1/4",
                        "flex flex-col justify-center"
                    )}>
                        <LaboratoryControlClause
                            // align="right"
                            items="right"
                            number="02"
                            text="Cвоевременный и поэтапный контроль избавляет в будущем от нецелесообразных затрат на вскрытие дорожной одежды"
                        />
                    </div>
                    
                    {/* <LaboratoryControlClause
                        // align="left"
                        items="left"
                        number="01"
                        text="Наши эксперты регулярно проводят испытания в поиске наилучших показателей дорожного полотна"
                    />
                    <div className={clsx(
                        "w-full",
                        "flex flex-col gap-4 lg:gap-24"
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
                        <LaboratoryControlClause
                            // align="left"
                            items="left"
                            number="03"
                            wrapperClassName="hidden sm:block"
                            text="Благодаря профессионализму специалистов достигается высочайший уровень технологий, позволяющий получать композиционный материал с заранее заданными уникальными свойствами"
                        />
                    </div> */}
                </div>
            </div>
            <img 
                src={banner_desktop} 
                className="w-full h-auto object-contain hidden sm:block xl:hidden"
            />
            <img 
                src={banner_desktop_xl} 
                className="w-full h-auto object-contain hidden xl:block"
            />
            <img 
                src={banner_mobile} 
                className="w-full h-auto object-contain sm:hidden"
            />
        </div>
    );
}