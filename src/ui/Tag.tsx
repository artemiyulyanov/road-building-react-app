import clsx from "clsx"

export type TagProps = React.HTMLProps<HTMLSpanElement> & {
    textClassName?: string
}

export const Tag: React.FC<TagProps> = ({
    textClassName,
    children,
    ...props
}) => {
    return (
        <span
            className={clsx(
                "block font-sans tracking-[-0.025em] border border-dark-2 rounded-full",
                "text-light font-bold",
                "py-[5px] px-[10px]",
                textClassName
            )}
            {...props}
        >
            {children}
        </span>
    );
}