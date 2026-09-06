import { WrapperIcon } from "@/icons/WrapperIcon"
import { PlainText } from "@/ui/PlainText"
import clsx from "clsx"

export type FaqAccordionProps = React.HTMLProps<HTMLDivElement> & {
    title: string
    selected: boolean
    onClick: () => void
}

export type FaqAccordionData = {
    slug: string
    title: string
    answer: string
}

export const FaqAccordion: React.FC<FaqAccordionProps> = ({
    title,
    selected,
    children,
    ...props
}) => {
    return (
        <div 
            className={clsx(
                "w-full h-auto",
                "pl-[15px] pr-[15px] pt-[20px] pb-[20px]",
                "gap-[20px]",
                "border-b border-dark-2",
                "flex flex-col"
            )}
            {...props}
        >
            <div className={clsx(
                "w-full h-auto",
                "flex flex-row justify-between items-center"
            )}>
                <PlainText
                    textClassName={clsx(
                        "relative font-medium h-auto",
                        " text-lg text-light"
                    )}
                >
                    {title}
                </PlainText>
                <WrapperIcon
                    contentClassName={clsx(
                        "relative h-2",
                        selected && 'rotate-180',
                        "transition-all duration-200"
                    )}
                />
            </div>
            {selected && (
                <div className={clsx(
                    "w-full h-auto",
                )}>
                    <PlainText
                        textClassName={clsx(
                            "relative font-medium h-auto",
                            " text-lg text-light"
                        )}
                    >
                        {children}
                    </PlainText>
                </div>
            )}
        </div>
    );
}