import clsx from "clsx";

export type TableColumnProps = React.HTMLProps<HTMLDivElement> & {
    disableUnderlining?: boolean
}

export const TableColumn: React.FC<TableColumnProps> = ({
    disableUnderlining,
    children
}) => {
    return (
        <div className={clsx(
            "w-full px-[20px] pt-[15px] pb-[15px] h-auto",
            !disableUnderlining && "border-b border-dark-2",
            "flex flex-row justify-between items-center"
        )}>
            {children}
        </div>
    );
}