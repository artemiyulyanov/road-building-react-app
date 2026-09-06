import { PlainText } from "@/ui/PlainText";
import { Table } from "../../ui/table/Table";
import { TableColumn } from "../../ui/table/TableColumn";
import clsx from "clsx";
import { TableHeader } from "../../ui/table/TableHeader";

export type MixtureListTableProps = React.HTMLProps<HTMLDivElement>

const columns: Array<Array<string>> = [
    [
        "асфальтобетонные смеси типов А, Б, В и Г",
        "от 100 рублей за кг"
    ],
    [
        "битумная эмульсия",
        "от 100 рублей за кг"
    ],
    [
        "КЗ",
        "от 100 рублей за кг"
    ],
    [
        "КЗБ",
        "от 100 рублей за кг"
    ],
    [
        "А5",
        "от 100 рублей за кг"
    ],
    [
        "А8",
        "от 100 рублей за кг"
    ],
    [
        "А16",
        "от 100 рублей за кг"
    ],
    [
        "А22",
        "от 100 рублей за кг"
    ],
    [
        "А32",
        "от 100 рублей за кг"
    ],
    [
        "ЩМА-16",
        "от 100 рублей за кг"
    ],
    [
        "ЩМА-22",
        "от 100 рублей за кг"
    ],
    [
        "SP",
        "от 100 рублей за кг"
    ],
    [
        "SMA",
        "от 100 рублей за кг"
    ],
]

export const MixtureListTable: React.FC<MixtureListTableProps> = ({}) => {
    return (
        <div className={clsx(
            "flex flex-col gap-6"
        )}>
            <Table>
                <TableHeader>
                    В наличии
                </TableHeader>
                {columns.map(cells => (
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
            <PlainText
                textClassName={clsx(
                    "relative h-auto font-medium",
                    " text-light text-primary"
                )}
            >
                Каждая партия проходит лабораторный контроль качества перед отгрузкой
            </PlainText>
        </div>
    );
}