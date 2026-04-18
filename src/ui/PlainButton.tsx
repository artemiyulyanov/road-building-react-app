import { Button, type ButtonProps } from "@heroui/react";
import clsx from "clsx";

export type PlainButtonProps = ButtonProps & {
    buttonClassName?: string
}

export const PlainButton: React.FC<PlainButtonProps> = ({
    children,
    buttonClassName,
    ...props
}) => {
    return (
        <Button
            className={clsx(
                "w-auto h-auto p-0 bg-transparent rounded-none",
                "transition-all duration-300 hover:opacity-50",
                "flex flex-row gap-1",
                buttonClassName
            )}
            {...props}
        >
            {children}
        </Button>
    );
}