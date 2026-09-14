import { PlainText } from "@/ui/PlainText";
import { Table } from "@/ui/table/Table";
import { TableColumn } from "@/ui/table/TableColumn";
import { TableHeader } from "@/ui/table/TableHeader";
import clsx from "clsx";

export type SpecialEquipmentTableProps = React.HTMLProps<HTMLDivElement>

const specialEquipment: Array<Array<string>> = [
    [
        "КДМ",
        "от 5000 рублей за час"
    ],
    [
        "Гудронатор",
        "от 5000 рублей за час"
    ],
    [
        "Самосвалы грузоподъёмностью 15 тонн",
        "от 5000 рублей за час"
    ],
    [
        "Самосвалы грузоподъёмностью 30 тонн",
        "от 5000 рублей за час"
    ],
]

export const SpecialEquipmentTable: React.FC<SpecialEquipmentTableProps> = ({}) => {
    return (
        <div className={clsx(
            "flex flex-col gap-6"
        )}>
            <Table>
                <TableHeader>
                    Землеройная техника
                </TableHeader>
                {specialEquipment.map(cells => (
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
                    "text-light text-primary"
                )}
            >
                Вся техника проходит регулярное техническое обслуживание и полностью готова к работе
            </PlainText>
        </div>
    );
}