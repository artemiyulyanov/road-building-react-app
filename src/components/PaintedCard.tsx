import { PlainText } from "@/ui/PlainText"
import clsx from "clsx"

export type PaintedCardProps = React.HTMLProps<HTMLDivElement> & {
    icon: React.ReactNode
    title: string
    description?: string
    theme: "transparent" | "light" | "yellow"
    isQuad?: boolean
    disableAnimation?: boolean
}

export const PaintedCard: React.FC<PaintedCardProps> = ({
    icon,
    title,
    description,
    theme,
    isQuad,
    disableAnimation,
    ...props
}) => {
    return (
        <div
            className={clsx(
                "p-[25px] rounded-3xl",
                !isQuad && "w-full h-auto md:aspect-[7/4] gap-4 lg:gap-6",
                isQuad && 'w-[calc((100vw-40px)/4)] aspect-square gap-3',
                "flex flex-col",
                (theme == "transparent") && 'bg-transparent border border-dark-2',
                (theme == "light") && 'bg-light',
                (theme == "yellow") && 'bg-primary',
                !disableAnimation && 'transition-all duration-200 hover:scale-[1.035]',
            )}
        >
            {icon}
            <div className={clsx(
                'flex flex-col gap-2'
            )}>
                <PlainText
                    textClassName={clsx(
                        "font-medium",
                        !isQuad && 'text-xl md:text-lg lg:text-xl',
                        isQuad && 'text-2xl md:text-xl lg:text-2xl',
                        "text-left leading-[1.2]",
                        (theme == 'transparent') ? "text-light" : "text-dark"
                    )}
                >
                    {title}
                </PlainText>
                {description && <PlainText
                    textClassName={clsx(
                        "font-medium opacity-40 w-full h-auto whitespace-pre-line break-words",
                        "text-left ",
                        (theme == 'transparent') ? "text-light" : "text-dark"
                    )}
                >
                    {description}
                </PlainText>}
            </div>
        </div>
    );
}