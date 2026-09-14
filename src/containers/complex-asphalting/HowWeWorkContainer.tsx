import { PaintedCard } from "@/components/PaintedCard"
import { LargeDigitWithPointIcon } from "@/icons/LargeDigitWithPointIcon"
import { PlainText } from "@/ui/PlainText"
import clsx from "clsx"

export type HowWeWorkContainerProps = React.HTMLProps<HTMLDivElement>

export type PaintedCardClause = {
    title: string
    theme: 'light' | 'transparent' | 'yellow'
    digit: '01' | '02' | '03' | '04' | '05' | '06' | '07'
}

const clauses: Array<PaintedCardClause> = [
    {
        "title": "Принимаем заявку",
        "theme": "transparent",
        "digit": "01"
    },
    {
        "title": "Инженер бесплатно выезжает на объект",
        "theme": "light",
        "digit": "02"
    },
    {
        "title": "Проводим осмотр и необходимые замеры",
        "theme": "yellow",
        "digit": "03"
    },
    {
        "title": "Подготавливаем подробную смету",
        "theme": "transparent",
        "digit": "04"
    },
    {
        "title": "Согласовываем сроки производства работ",
        "theme": "light",
        "digit": "05"
    },
    {
        "title": "Выполняем полный комплекс дорожно-строительных работ",
        "theme": "yellow",
        "digit": "06"
    },
    {
        "title": "Сдаём объект заказчику точно в согласованные сроки",
        "theme": "transparent",
        "digit": "07"
    },
]

export const HowWeWorkContainer: React.FC<HowWeWorkContainerProps> = ({

}) => {
    return (
        <div 
            className={clsx(
                "w-full h-auto",
                "pl-[20px] pr-[20px] md:pl-[40px] md:pr-[40px]",
                "flex flex-col gap-2 md:gap-3"
            )}
            id="how-we-work-container"
        >
            <PlainText
                textClassName={clsx(
                    "relative font-medium break-words",
                    "text-xl xl:text-2xl text-light"
                )}
            >
                Как мы работаем
            </PlainText>
            <div className={clsx(
                'w-full h-auto',
                'overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden'
            )}>
                <div className={clsx(
                    'hidden md:flex flex-row gap-4 w-max h-auto'
                )}>
                    {clauses.map(clause => (
                        <PaintedCard
                            icon={
                                <LargeDigitWithPointIcon
                                    digit={clause.digit}
                                    contentClassName={clsx(
                                        "relative w-auto h-6 md:h-8 lg:h-10"
                                    )}
                                    theme={(clause.theme == 'light' || clause.theme == 'yellow') ? 'dark' : 'light'}
                                />
                            }
                            title={clause.title}
                            theme={clause.theme}
                            isQuad={true}
                            disableAnimation={true}
                        />
                    ))}
                </div>
                <div className={clsx(
                    'flex md:hidden flex-col gap-4 w-full h-auto'
                )}>
                    {clauses.map(clause => (
                        <PaintedCard
                            icon={
                                <LargeDigitWithPointIcon
                                    digit={clause.digit}
                                    contentClassName={clsx(
                                        "relative w-auto h-10"
                                    )}
                                    theme={(clause.theme == 'light' || clause.theme == 'yellow') ? 'dark' : 'light'}
                                />
                            }
                            title={clause.title}
                            theme={clause.theme}
                            isQuad={false}
                            disableAnimation={true}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}