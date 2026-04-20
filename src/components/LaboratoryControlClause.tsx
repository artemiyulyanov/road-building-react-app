import { LargeDigitIcon } from "@/icons/LargeDigitIcon"
import { PlainText } from "@/ui/PlainText"
import clsx from "clsx"

export type LaboratoryControlClauseProps = React.HTMLProps<HTMLDivElement> & {
    number: '01' | '02' | '03'
    text: string
    align: 'left' | 'right'
    items: 'left' | 'right'
    wrapperClassName?: string
}

export const LaboratoryControlClause: React.FC<LaboratoryControlClauseProps> = ({
    align,
    items,
    number,
    text,
    wrapperClassName,
    ...props
}) => {
    return (
        <div
            className={clsx(
                "w-full flex flex-col gap-4",
                (align == 'left') && 'items-start',
                (align == 'right') && 'items-end',
                wrapperClassName
            )}
        >
            <div
                className={clsx(
                    "w-3/5 md:w-2/7 lg:w-1/4 flex flex-col gap-4",
                    (items == 'left') && 'items-start',
                    (items == 'right') && 'items-end'
                )}
            >
                <LargeDigitIcon 
                    digit={number}
                    contentClassName={clsx(
                        "relative h-16 lg:h-18"
                    )}
                />
                <PlainText
                    textClassName={clsx(
                        "relative font-medium break-words w-full",
                        "text-base sm:text-lg lg:text-xl leading-[0.95] text-light",
                        (items == 'left') && 'text-left',
                        (items == 'right') && 'text-right'
                    )}
                >
                    {text}
                </PlainText>
            </div>
        </div>
    );
}