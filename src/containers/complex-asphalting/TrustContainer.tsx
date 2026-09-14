import { PaintedCard } from "@/components/PaintedCard"
import { LargeDigitWithPointIcon } from "@/icons/LargeDigitWithPointIcon"
import { PlainText } from "@/ui/PlainText"
import clsx from "clsx"

export type TrustContainerProps = React.HTMLProps<HTMLDivElement>

export type PaintedCardClause = {
    title: string
    theme: 'light' | 'transparent' | 'yellow'
    digit: '01' | '02' | '03' | '04' | '05' | '06' | '07'
}

const clauses: Array<PaintedCardClause> = [
    {
        "title": "Владеем всеми необходимыми ресурсами для быстрого и качественного выполнения работ",
        "theme": "transparent",
        "digit": "01"
    },
    {
        "title": "Собственное производство асфальтобетона",
        "theme": "light",
        "digit": "02"
    },
    {
        "title": "Современная техника",
        "theme": "yellow",
        "digit": "03"
    },
    {
        "title": "Квалифицированные специалисты",
        "theme": "transparent",
        "digit": "04"
    },
    {
        "title": "Контроль качества на каждом этапе",
        "theme": "light",
        "digit": "05"
    },
]

export const TrustContainer: React.FC<TrustContainerProps> = ({

}) => {
    return (
        <div 
            className={clsx(
                "w-full h-auto",
                "pl-[20px] pr-[20px] md:pl-[40px] md:pr-[40px]",
                "flex flex-col gap-2 md:gap-3"
            )}
            id="trust-container"
        >
            <PlainText
                textClassName={clsx(
                    "relative font-medium break-words",
                    "text-xl xl:text-2xl text-light"
                )}
            >
                Почему нам доверяют
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