import { PlainText } from "@/ui/PlainText";
import clsx from "clsx"

export type TableHeaderProps = React.HTMLProps<HTMLDivElement>

export const TableHeader: React.FC<TableHeaderProps> = ({
    children
}) => {
    return (
        <div className={clsx(
            "w-full pt-[20px] pb-[20px] h-auto",
            "border-b border-dark-2",
            "flex flex-row justify-between items-center"
        )}>
            <PlainText
                textClassName={clsx(
                    "relative font-medium h-auto",
                    " text-2xl md:text-xl xl:text-2xl text-light"
                )}
            >
                {children}
            </PlainText>
        </div>
    );
}