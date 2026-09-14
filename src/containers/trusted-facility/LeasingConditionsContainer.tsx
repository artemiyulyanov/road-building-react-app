import { PaintedCard } from "@/components/PaintedCard"
import { FlagIcon } from "@/icons/FlagIcon"
import { LargeDigitWithPointIcon } from "@/icons/LargeDigitWithPointIcon"
import { PlainText } from "@/ui/PlainText"
import clsx from "clsx"

export type LeasingConditionsContainerProps = React.HTMLProps<HTMLDivElement>

export type PaintedCardClause = {
    title: string
    theme: 'light' | 'transparent' | 'yellow'
    digit: '01' | '02' | '03' | '04' | '05'
}

const clauses: Array<PaintedCardClause> = [
    {
        "title": "Аренда осуществляется только с оператором",
        "theme": "transparent",
        "digit": "01"
    },
    {
        "title": "Минимальное время работы — 10 часов",
        "theme": "light",
        "digit": "02"
    },
    {
        "title": "Работаем с юридическими и физическими лицами",
        "theme": "yellow",
        "digit": "03"
    },
    {
        "title": "Заключаем официальный договор",
        "theme": "transparent",
        "digit": "04"
    },
    {
        "title": "Стоимость рассчитывается индивидуально в зависимости от вида техники, объёма работ и срока аренды",
        "theme": "light",
        "digit": "05"
    },
]

export const LeasingConditionsContainer: React.FC<LeasingConditionsContainerProps> = ({

}) => {
    return (
        <div 
            className={clsx(
                "w-full h-auto",
                "pl-[20px] pr-[20px] md:pl-[40px] md:pr-[40px]",
                "flex flex-col gap-2 md:gap-3"
            )}
            id="leasing-conditions-container"
        >
            <FlagIcon
                contentClassName={clsx(
                    "relative h-12 lg:h-14"
                )}
            />
            <PlainText
                textClassName={clsx(
                    "relative font-medium break-words",
                    "text-xl xl:text-2xl text-light"
                )}
            >
                Условия аренды
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