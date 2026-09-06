import clsx from "clsx";

export type TableProps = React.HTMLProps<HTMLDivElement>

export const Table: React.FC<TableProps> = ({
    children
}) => {
    return (
        <div className={clsx(
            "w-full flex flex-col h-auto",
        )}>
            {children}
        </div>
    );
}