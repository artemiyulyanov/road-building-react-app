import { PlainText } from "@/ui/PlainText";
import { Table } from "@/ui/table/Table";
import { TableColumn } from "@/ui/table/TableColumn";
import { TableHeader } from "@/ui/table/TableHeader";
import clsx from "clsx";

export type PaversTableProps = React.HTMLProps<HTMLDivElement>

const asphaltPavers: Array<Array<string>> = [
    [
        "Volvo (ширина укладки 2,5–5 м)",
        "от 5000 рублей за час"
    ],
    [
        "Volvo (ширина укладки 3–6 м)",
        "от 5000 рублей за час"
    ],
]

export const PaversTable: React.FC<PaversTableProps> = ({}) => {
    return (
        <div className={clsx(
            "flex flex-col gap-6"
        )}>
            <Table>
                <TableHeader>
                    Асфальтоукладчики
                </TableHeader>
                {asphaltPavers.map(cells => (
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