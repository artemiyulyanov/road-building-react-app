import { BaseButton } from "@/ui/BaseButton";
import { BaseRadio } from "@/ui/BaseRadio";
import { Description, Input, Label, RadioGroup, TextArea } from "@heroui/react";
import clsx from "clsx";
import { useForm } from "react-hook-form";

export type TurnkeyAsphaltingFormProps = React.HTMLProps<HTMLDivElement>

export type FormData = {
  type: string
  contact: string
  description: string
  weight: string
  organization: string
  taxNumber: string
};

export const TurnkeyAsphaltingForm: React.FC<TurnkeyAsphaltingFormProps> = ({

}) => {
    const {
        register,
        handleSubmit,
        watch,
        formState: {}
    } = useForm<FormData>();

    return (
        <div className={clsx(
            "w-full h-auto",
            'pl-[20px] pr-[20px] md:pl-[40px] md:pr-[40px]',
        )}>
            <div className={clsx(
                "w-full h-auto bg-dark-3 rounded-3xl",
                // 'flex flex-col md:flex-row gap-4 p-4 sm:p-6'
                "grid grid-cols-1 md:grid-cols-2 gap-4 p-4 sm:p-6"
            )}>
                <div className={clsx(
                    "w-full h-auto",
                    'flex flex-col gap-4'
                )}>
                    <div className="flex flex-col gap-1">
                        <Label className="font-medium text-sm text-light">Выберите тип асфальта</Label>
                        <RadioGroup defaultValue="a" name="input-asphalt-type" orientation="horizontal" isRequired>
                            <BaseRadio value='a'>
                                <Label className="font-medium text-base text-light">А</Label>
                            </BaseRadio>
                            <BaseRadio value='b'>
                                <Label className="font-medium text-base text-light">Б</Label>
                            </BaseRadio>
                            <BaseRadio value='c'>
                                <Label className="font-medium text-base text-light">В</Label>
                            </BaseRadio>
                            <BaseRadio value='d'>
                                <Label className="font-medium text-base text-light">Г</Label>
                            </BaseRadio>
                            <BaseRadio value='csm'>
                                <Label className="font-medium text-base text-light">ЩМА</Label>
                            </BaseRadio>
                        </RadioGroup>
                    </div>
                    <div className="flex flex-col gap-1">
                        <Label 
                            className="font-medium text-sm text-light" 
                            htmlFor="input-contact"
                        >
                            Способ обратной связи
                        </Label>
                        <Input 
                            id="input-contact" 
                            placeholder="Email, Telegram или WhatsApp" 
                            className={clsx(
                                "bg-dark-4",
                                "font-medium text-light placeholder:text-light/25",
                                "focus:outline-none focus:ring-0",
                            )}
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <Label 
                            className="font-medium text-sm text-light" 
                            htmlFor="input-description"
                        >
                            Уточняющие подробности
                        </Label>
                        <TextArea
                            id="input-description"
                            placeholder="Начните вводить здесь..."
                            className={clsx(
                                "bg-dark-4 aspect-[5/2]",
                                "font-medium text-light placeholder:text-light/25",
                                "focus:outline-none focus:ring-0",
                                "resize-none"
                            )}
                            value={watch('description')}
                            minLength={20}
                            maxLength={1000}
                            {...register("description", { required: "Введите уточняющие подробности", minLength: { value: 20, message: "Минимум 20 символов" }, maxLength: { value: 1000, message: "Не более 1000 символов!" } })}
                        />
                        <Description className="font-medium text-light/25">
                            Символов: {watch('description') != undefined ? watch('description').length : 0} / 1000
                        </Description>
                    </div>
                </div>
                <div className={clsx(
                    "w-full h-auto",
                    'flex flex-col gap-4 justify-between'
                )}>
                    <div className={clsx(
                        "w-full h-auto",
                        'flex flex-col gap-4'
                    )}>
                        <div className="flex flex-col gap-1">
                            <Label 
                                className="font-medium text-sm text-light" 
                                htmlFor="input-weight"
                            >
                                Укажите кол-во асфальта
                            </Label>
                            <Input 
                                id="input-weight" 
                                placeholder="кг" 
                                type="number"
                                className={clsx(
                                    "bg-dark-4",
                                    "font-medium text-light placeholder:text-light/25",
                                    "focus:outline-none focus:ring-0"
                                )}
                            />
                        </div>
                        <div className="flex flex-col md:flex-row items-end gap-4 md:gap-2">
                            <div className="w-full flex flex-col gap-1">
                                <Label 
                                    className="font-medium text-sm text-light" 
                                    htmlFor="input-organization"
                                >
                                    Наименование вашей организации
                                </Label>
                                <Input 
                                    id="input-organization" 
                                    placeholder="ООО ТДС" 
                                    className={clsx(
                                        "bg-dark-4",
                                        "font-medium text-light placeholder:text-light/25",
                                        "focus:outline-none focus:ring-0"
                                    )}
                                />
                            </div>
                            <div className="w-full flex flex-col gap-1">
                                <Label 
                                    className="font-medium text-sm text-light" 
                                    htmlFor="input-tax-number"
                                >
                                    ИНН
                                </Label>
                                <Input 
                                    id="input-tax-number" 
                                    placeholder="0123456789012345" 
                                    className={clsx(
                                        "bg-dark-4",
                                        "font-medium text-light placeholder:text-light/25",
                                        "focus:outline-none focus:ring-0"
                                    )}
                                    minLength={16}
                                    maxLength={16}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row justify-end">
                        <BaseButton 
                            theme="light"
                            buttonClassName={clsx(
                                "w-full sm:w-auto",
                                "px-[15px] py-[15px] sm:px-[10px] sm:py-[10px]",
                            )}
                        >
                            <div className="text-sm sm:text-xs md:text-sm">Получить счёт</div>
                        </BaseButton>
                    </div>
                </div>
            </div>
        </div>
    );
}