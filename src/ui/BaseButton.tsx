import { ButtonArrowIcon } from "@/icons/ButtonArrowIcon";
import { Button, type ButtonProps } from "@heroui/react"
import clsx from "clsx";

export type BaseButtonProps = ButtonProps & {
    buttonClassName?: string
    theme?: 'light' | 'primary' | 'dark'
}

export const BaseButton: React.FC<BaseButtonProps> = ({
    children,
    buttonClassName,
    theme = 'light',
    ...props
}) => {
    return (
        <Button
            className={clsx(
                "w-auto h-auto px-[10px] py-[5px] rounded-full",
                "font-bold tracking-[-0.025em] text-xs md:text-sm lg:text-sm",
                "transition-all duration-300 hover:opacity-50",
                "flex flex-row gap-2",
                (theme == 'light') && "bg-light text-dark",
                (theme == 'dark') && "bg-dark text-light",
                (theme == 'primary') && "bg-primary text-dark",
                buttonClassName
            )}
            {...props}
        >
            {children}
        </Button>
    );
}