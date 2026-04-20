import { PlainText } from "@/ui/PlainText"
import clsx from "clsx"

export type CollaborationBenefitProps = React.HTMLProps<HTMLDivElement> & {
    icon: React.ReactNode
    title: string
    description: string
    theme: "transparent" | "light" | "yellow"
}

export const CollaborationBenefit: React.FC<CollaborationBenefitProps> = ({
    icon,
    title,
    description,
    theme,
    ...props
}) => {
    return (
        <div
            className={clsx(
                "w-full h-auto md:aspect-[7/4] p-[25px] rounded-3xl",
                "flex flex-col gap-4 lg:gap-6",
                (theme == "transparent") && 'bg-transparent border border-dark-2',
                (theme == "light") && 'bg-light',
                (theme == "yellow") && 'bg-primary',
                'transition-all duration-200',
                'hover:scale-[1.035]'
            )}
        >
            {icon}
            <div className={clsx(
                'flex flex-col gap-2'
            )}>
                <PlainText
                    textClassName={clsx(
                        "text-lg lg:text-xl font-bold",
                        "text-left leading-[0.95]",
                        (theme == 'transparent') ? "text-light" : "text-dark"
                    )}
                >
                    {title}
                </PlainText>
                <PlainText
                    textClassName={clsx(
                        "font-medium opacity-50 w-full h-auto whitespace-pre-line break-words",
                        "text-left leading-[0.95]",
                        (theme == 'transparent') ? "text-light" : "text-dark"
                    )}
                >
                    {description}
                </PlainText>
            </div>
        </div>
    );
}