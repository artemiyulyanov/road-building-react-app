import { Button, type ButtonProps } from "@heroui/react";
import clsx from "clsx";

export type PlainButtonProps = ButtonProps & {
    buttonClassName?: string
    hoverEffects?: boolean
}

export const PlainButton: React.FC<PlainButtonProps> = ({
    children,
    buttonClassName,
    hoverEffects = true,
    ...props
}) => {
    return (
        <Button
            className={clsx(
                "w-auto h-auto p-0 bg-transparent rounded-none",
                "transition-all duration-300",
                "flex flex-row gap-1",
                hoverEffects && 'hover:opacity-50',
                buttonClassName
            )}
            {...props}
        >
            {children}
        </Button>
    );
}