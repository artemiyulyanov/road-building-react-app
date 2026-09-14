import { LargeDigitIcon } from "@/icons/LargeDigitIcon"
import { PlainText } from "@/ui/PlainText"
import clsx from "clsx"

export type AdvantageClauseProps = React.HTMLProps<HTMLDivElement> & {
    number: '01' | '02' | '03' | '04' | '05' | '06' | '07' | '08'
    text: string
    description: string
    items: 'left' | 'right'
    wrapperClassName?: string
}

export const AdvantageClause: React.FC<AdvantageClauseProps> = ({
    items,
    number,
    text,
    description,
    wrapperClassName,
    ...props
}) => {
    return (
        <div
            className={clsx(
                "w-full h-auto flex flex-col gap-4",
                (items == 'left') && 'items-start',
                (items == 'right') && 'items-end',
                wrapperClassName
            )}
        >
            <LargeDigitIcon
                digit={number}
                contentClassName={clsx(
                    "relative h-14 lg:h-16 xl:h-18"
                )}
            />
            <div className={clsx(
                "flex flex-col gap-2"
            )}>
                <PlainText
                    textClassName={clsx(
                        "relative font-medium break-words w-full",
                        "text-2xl  text-light",
                        (items == 'left') && 'text-left',
                        (items == 'right') && 'text-right'
                    )}
                >
                    {text}
                </PlainText>
                <PlainText
                    textClassName={clsx(
                        "relative font-medium opacity-40 break-words w-full",
                        "text-xl  text-light",
                        (items == 'left') && 'text-left',
                        (items == 'right') && 'text-right'
                    )}
                >
                    {description}
                </PlainText>
            </div>
        </div>
    );
}