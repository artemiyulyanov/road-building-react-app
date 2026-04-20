import clsx from "clsx";
import banner_desktop from '@/assets/laboratory-control-banner.png';
import banner_mobile from '@/assets/laboratory-control-banner-mobile.png';
import { PlainText } from "@/ui/PlainText";
import { LaboratoryControlClause } from "@/components/LaboratoryControlClause";

export type LaboratoryControlContainerProps = React.HTMLProps<HTMLDivElement>

export const LaboratoryControlContainer: React.FC<LaboratoryControlContainerProps> = ({

}) => {
    return (
        <div
            className={clsx(
                "relative w-full flex"
            )}
        >
            <div
                className={clsx(
                    "w-full h-auto absolute",
                    'pl-[20px] pr-[20px] md:pl-[40px] md:pr-[40px]',
                    "flex flex-col gap-20 lg:gap-36"
                )}
            >
                <div className={clsx(
                    "w-full md:w-1/2",
                    "flex flex-col gap-2"
                )}>
                    <PlainText
                        textClassName={clsx(
                            "relative font-medium break-words",
                            "text-2xl leading-[0.95] text-light"
                        )}
                    >
                        Лабораторный контроль качества и лабораторное сопровождение в дорожном строительстве
                    </PlainText>
                    <PlainText
                        textClassName={clsx(
                            "relative opacity-50 font-medium",
                            "text-lg leading-[0.95] text-light"
                        )}
                    >
                        Следим за качеством нашего асфальтного покрытия, чтобы ваши дороги были безопасными
                    </PlainText>
                </div>
                <div className={clsx(
                    "w-full",
                    "flex flex-col gap-8 lg:gap-32"
                )}>
                    <LaboratoryControlClause
                        align="left"
                        items="left"
                        number="01"
                        text="Наши эксперты регулярно проводят испытания в поиске наилучших показателей дорожного полотна"
                    />
                    <div className={clsx(
                        "w-full",
                        "flex flex-col gap-4 lg:gap-24"
                    )}>
                        <LaboratoryControlClause
                            align="right"
                            items="right"
                            number="02"
                            text="Cвоевременный и поэтапный контроль избавляет в будущем от нецелесообразных затрат на вскрытие дорожной одежды"
                        />
                        <LaboratoryControlClause
                            align="right"
                            items="left"
                            number="03"
                            wrapperClassName="sm:hidden"
                            text="Благодаря профессионализму специалистов достигается высочайший уровень технологий, позволяющий получать композиционный материал с заранее заданными уникальными свойствами"
                        />
                        <LaboratoryControlClause
                            align="left"
                            items="left"
                            number="03"
                            wrapperClassName="hidden sm:block"
                            text="Благодаря профессионализму специалистов достигается высочайший уровень технологий, позволяющий получать композиционный материал с заранее заданными уникальными свойствами"
                        />
                    </div>
                </div>
            </div>
            <img 
                src={banner_desktop} 
                className="w-full h-auto object-contain hidden sm:block"
            />
            <img 
                src={banner_mobile} 
                className="w-full h-auto object-contain sm:hidden"
            />
        </div>
    );
}