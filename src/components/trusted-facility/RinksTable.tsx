import { PlainText } from "@/ui/PlainText";
import { Table } from "@/ui/table/Table";
import { TableColumn } from "@/ui/table/TableColumn";
import { TableHeader } from "@/ui/table/TableHeader";
import clsx from "clsx";

export type RinksTableProps = React.HTMLProps<HTMLDivElement>

const roadRollers: Array<Array<string>> = [
    [
        "Каток 1,5 тонн",
        "от 5000 рублей за час"
    ],
    [
        "Каток 3 тонн",
        "от 5000 рублей за час"
    ],
    [
        "Каток 3,5 тонн",
        "от 5000 рублей за час"
    ],
    [
        "Каток 8 тонн",
        "от 5000 рублей за час"
    ],
    [
        "Каток 12 тонн",
        "от 5000 рублей за час"
    ],
    [
        "Грунтовый каток 17 тонн",
        "от 5000 рублей за час"
    ],
]

export const RinksTable: React.FC<RinksTableProps> = ({}) => {
    return (
        <div className={clsx(
            "flex flex-col gap-6"
        )}>
            <Table>
                <TableHeader>
                    Дорожные катки
                </TableHeader>
                {roadRollers.map(cells => (
                    <TableColumn>
                        <PlainText
                            textClassName={clsx(
                                "relative font-medium h-auto",
                                " text-lg text-light w-1/2"
                            )}
                        >
                            {cells[0]}
                        </PlainText>
                        <PlainText
                            textClassName={clsx(
                                "relative opacity-40 h-auto font-medium",
                                " text-lg text-light"
                            )}
                        >
                            {cells[1]}
                        </PlainText>
                    </TableColumn>
                ))}
            </Table>
            {/* <PlainText
                textClassName={clsx(
                    "relative h-auto font-medium",
                    "text-light text-primary"
                )}
            >
                Каждая партия проходит лабораторный контроль качества перед отгрузкой
            </PlainText> */}
        </div>
    );
}