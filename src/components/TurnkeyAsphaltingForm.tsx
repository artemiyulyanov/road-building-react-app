import { BaseButton } from "@/ui/BaseButton";
import { BaseRadio } from "@/ui/BaseRadio";
import { Description, FieldError, Input, Label, RadioGroup, Spinner, TextArea, TextField } from "@heroui/react";
import clsx from "clsx";
import { Controller, useForm } from "react-hook-form";

export type TurnkeyAsphaltingFormProps = React.HTMLProps<HTMLDivElement>

export type FormData = {
  type: string
  contact: string
  description: string
  weight: number
  organization: string
  taxNumber: number
};

export const TurnkeyAsphaltingForm: React.FC<TurnkeyAsphaltingFormProps> = ({

}) => {
    const {
        register,
        handleSubmit,
        control,
        watch,
        formState: { errors, isSubmitting, isSubmitted, isSubmitSuccessful }
    } = useForm<FormData>({
        defaultValues: {
            type: "a"
        }
    });

    const onSubmit = (data: FormData) => {
        console.log(data);
    }

    const onError = (errors: any) => {
        console.log("Ошибки:", errors);
    };

    return (
        <div className={clsx(
            "w-full h-auto",
            'pl-[20px] pr-[20px] md:pl-[40px] md:pr-[40px]',
        )}>
            <form
                id="turnkey-asphalting-form"
                className={clsx(
                    "w-full h-auto bg-dark-3 rounded-3xl",
                    "grid grid-cols-1 md:grid-cols-2 gap-4 p-4 sm:p-6"
                )}
                onSubmit={handleSubmit(onSubmit, onError)}
            >
                <div className={clsx(
                    "w-full h-auto",
                    'flex flex-col gap-4'
                )}>
                    <div className="flex flex-col gap-1">
                        <Label className="font-medium text-sm text-light">Выберите тип асфальта</Label>
                        <Controller
                            name="type"
                            control={control}
                            rules={{ required: "Выберите тип асфальта" }}
                            render={({ field }) => (
                                <RadioGroup 
                                    defaultValue="a" 
                                    orientation="horizontal" 
                                    isRequired
                                    {...field}
                                >
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
                            )}
                        />
                    </div>
                    <TextField className="flex flex-col gap-1" isInvalid={errors.contact != undefined}>
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
                            minLength={1}
                            maxLength={250}
                            {...register(
                                "contact", 
                                { 
                                    required: "Введите способ обратной связи", 
                                    minLength: { 
                                        value: 1, 
                                        message: "Минимум 1 символ!" 
                                    }, 
                                    maxLength: { 
                                        value: 250, 
                                        message: "Не более 250 символов!" 
                                    } 
                                }
                            )}
                        />
                        <FieldError className="font-medium">{errors.contact?.message}</FieldError>
                    </TextField>
                    <TextField className="flex flex-col gap-1" isInvalid={errors.description != undefined}>
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
                            {...register(
                                "description", 
                                { 
                                    required: "Введите уточняющие подробности", 
                                    minLength: { 
                                        value: 20, 
                                        message: "Минимум 20 символов" 
                                    }, 
                                    maxLength: { 
                                        value: 1000, 
                                        message: "Не более 1000 символов!" 
                                    } 
                                }
                            )}
                        />
                        <FieldError className="font-medium">{errors.description?.message}</FieldError>
                        <Description className="font-medium text-light/25">
                            Символов: {watch('description') != undefined ? watch('description').length : 0} / 1000
                        </Description>
                    </TextField>
                </div>
                <div className={clsx(
                    "w-full h-auto",
                    'flex flex-col gap-4 justify-between'
                )}>
                    <div className={clsx(
                        "w-full h-auto",
                        'flex flex-col gap-4'
                    )}>
                        <TextField className="flex flex-col gap-1" isInvalid={errors.weight != undefined}>
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
                                minLength={1}
                                maxLength={10}
                                {...register(
                                    "weight", 
                                    { 
                                        required: "Введите количество килограмм!", 
                                        minLength: { 
                                            value: 1, 
                                            message: "Минимум 1 символ!" 
                                        }, 
                                        maxLength: { 
                                            value: 10, 
                                            message: "Не более 10 символов!" 
                                        },
                                        valueAsNumber: true
                                    }
                                )}
                            />
                            <FieldError className="font-medium">{errors.weight?.message}</FieldError>
                        </TextField>
                        <div className="flex flex-col md:flex-row items-start gap-4 md:gap-2">
                            <TextField className="w-full flex flex-col gap-1" isInvalid={errors.organization != undefined}>
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
                                    minLength={1}
                                    maxLength={100}
                                    {...register(
                                        "organization", 
                                        { 
                                            required: "Введите название организации!", 
                                            minLength: { 
                                                value: 1, 
                                                message: "Минимум 1 символ!" 
                                            }, 
                                            maxLength: { 
                                                value: 100, 
                                                message: "Не более 100 символов!" 
                                            }
                                        }
                                    )}
                                />
                                <FieldError className="font-medium">{errors.organization?.message}</FieldError>
                            </TextField>
                            <TextField className="w-full flex flex-col gap-1" isInvalid={errors.taxNumber != undefined}>
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
                                    type="number"
                                    minLength={16}
                                    maxLength={16}
                                    {...register(
                                        "taxNumber", 
                                        { 
                                            required: "Введите ИНН!", 
                                            minLength: { 
                                                value: 16, 
                                                message: "ИНН должен быть 16 символов!" 
                                            }, 
                                            maxLength: { 
                                                value: 16, 
                                                message: "ИНН должен быть 16 символов!" 
                                            },
                                            valueAsNumber: true
                                        }
                                    )}
                                />
                                <FieldError className="font-medium">{errors.taxNumber?.message}</FieldError>
                            </TextField>
                        </div>
                    </div>
                    <div className="flex flex-row justify-end">
                        <BaseButton 
                            theme="light"
                            buttonClassName={clsx(
                                "w-full sm:w-auto",
                                "px-[15px] py-[15px] sm:px-[10px] sm:py-[10px]",
                            )}
                            type="submit"
                            isPending={isSubmitting}
                        >
                            {({isPending}) => (
                                <>
                                    {isPending ? <Spinner color="current" size="sm" /> : null}
                                    <div className="text-sm sm:text-xs md:text-sm">Получить счёт</div>
                                </>
                            )}
                        </BaseButton>
                    </div>
                </div>
            </form>
        </div>
    );
}