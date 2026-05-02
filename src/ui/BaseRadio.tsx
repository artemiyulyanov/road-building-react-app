import { SelectedCheckboxIcon } from "@/icons/SelectedCheckboxIcon";
import { Description, Label, Radio } from "@heroui/react";
import clsx from "clsx";

export type BaseRadioProps = React.HTMLProps<HTMLDivElement> & {
    value: string
}

export const BaseRadio: React.FC<BaseRadioProps> = ({
    value,
    children
}) => {
    return (
        <Radio 
            value={value}
            className="flex flex-row items-center gap-2"
        >
            <Radio.Control className={clsx(
                'border border-dark-5 w-5 h-5',
                "bg-transparent !m-0",
            )}>
                <Radio.Indicator className={clsx(
                    "w-full h-full rounded-full",
                    "before:hidden",
                    "shadow-none",
                    "after:hidden",
                    "overflow-hidden"
                )}>
                    {({isSelected}) =>
                        isSelected ? (
                            <div className={clsx(
                                "w-full h-full bg-primary",
                                'flex flex-col items-center justify-center'
                            )}>
                                <SelectedCheckboxIcon 
                                    contentClassName="w-3 h-auto"
                                />
                            </div>
                        ) : null
                    }
                </Radio.Indicator>
            </Radio.Control>
            <Radio.Content className="flex flex-col items-center justify-center">
                {children}
            </Radio.Content>
        </Radio>
    );
}