import clsx from "clsx";
import type React from "react";

export type PlainTextProps = React.HTMLProps<HTMLSpanElement> & {
    textClassName?: string
}

export const PlainText: React.FC<PlainTextProps> = ({
    textClassName,
    children,
    ...props
}) => {
    return (
        <span
            className={clsx(
                "block font-sans tracking-[-0.025em]",
                textClassName
            )}
            {...props}
        >
            {children}
        </span>
    );
}