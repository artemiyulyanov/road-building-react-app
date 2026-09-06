import type { AsphaltConcreteMixFormData } from "@/entities/entities.types";
import { BaseButton } from "@/ui/BaseButton";
import { PlainText } from "@/ui/PlainText";
import { FieldError, Input, Label, Spinner, TextField } from "@heroui/react";
import clsx from "clsx";
import { useForm } from "react-hook-form";

export type AsphaltConcreteMixFormContentProps = React.HTMLProps<HTMLDivElement> & {
    submissionStatus: number | undefined
    setSubmissionStatus: React.Dispatch<React.SetStateAction<number | undefined>>
}

export const AsphaltConcreteMixFormContent: React.FC<AsphaltConcreteMixFormContentProps> = ({
    submissionStatus,
    setSubmissionStatus
}) => {
    const {
        register,
        handleSubmit,
        control,
        watch,
        formState: { errors, isSubmitting, isSubmitted, isSubmitSuccessful }
    } = useForm<AsphaltConcreteMixFormData>({
        mode: 'onChange'
    });

    const onSubmit = async (data: AsphaltConcreteMixFormData) => {
        // try {
        //     const payload = {
        //         ...data,
        //         type: (isAsphaltType(data.type)) ? asphaltTypes[data.type] : data.type
        //     };

        //     const res = await postTurnkeyAsphaltForm(payload);

        //     setSubmissionStatus(res.status);
        // } catch (error) {
        //     console.log(error);
        //     setSubmissionStatus(0);
        // }
    }

    const onError = (errors: any) => {
        console.log("Ошибки:", errors);
    };

    return (
        <form
            className={clsx(
                'w-full h-auto flex flex-col gap-6'
            )}
            onSubmit={handleSubmit(onSubmit, onError)}
        >
            <div className={clsx(
                "flex flex-col"
            )}>
                <PlainText
                    textClassName={clsx(
                        "relative font-medium break-words",
                        "text-xl md:text-lg xl:text-xl text-light"
                    )}
                >
                    Форма обратной связи
                </PlainText>
                <PlainText
                    textClassName={clsx(
                        "relative opacity-40 font-medium",
                        "text-lg md:text-medium xl:text-lg text-light"
                    )}
                >
                    Наш менеджер вам перезвонит
                </PlainText>
            </div>
            <div className={clsx(
                "w-full h-auto",
                'flex flex-col gap-4'
            )}>
                <TextField className="flex flex-col gap-1" isInvalid={errors.name != undefined}>
                    <Label 
                        className="font-medium text-sm text-light" 
                        htmlFor="input-name"
                    >
                        Введите ФИО
                    </Label>
                    <Input 
                        id="input-name" 
                        placeholder="Иванов Иван Иванович" 
                        className={clsx(
                            "bg-dark-4",
                            "font-medium text-light placeholder:text-light/25",
                            "focus:outline-none focus:ring-0",
                        )}
                        {...register(
                            "name", 
                            { 
                                required: "Введите ФИО!", 
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
                    <FieldError className="font-medium">{errors.name?.message}</FieldError>
                </TextField>
                <TextField className="flex flex-col gap-1" isInvalid={errors.name != undefined}>
                    <Label 
                        className="font-medium text-sm text-light" 
                        htmlFor="input-phone"
                    >
                        Введите номер телефона
                    </Label>
                    <Input 
                        id="input-phone" 
                        placeholder="+7 (123) 456-78-90" 
                        className={clsx(
                            "bg-dark-4",
                            "font-medium text-light placeholder:text-light/25",
                            "focus:outline-none focus:ring-0",
                        )}
                        {...register(
                            "name", 
                            { 
                                required: "Введите номер телефона!", 
                                minLength: { 
                                    value: 10, 
                                    message: "От 10 до 12 символов!" 
                                }, 
                                maxLength: { 
                                    value: 12, 
                                    message: "От 10 до 12 символов!" 
                                } 
                            }
                        )}
                    />
                    <FieldError className="font-medium">{errors.phone?.message}</FieldError>
                </TextField>
            </div>
            <div className={clsx(
                "w-full h-auto",
                'flex flex-col gap-4 justify-between'
            )}>
                <div className="flex flex-row justify-start">
                    <BaseButton
                        theme="light"
                        buttonClassName={clsx(
                            "w-full sm:w-auto",
                            "px-[15px] py-[15px] sm:px-[10px] sm:py-[10px]",
                        )}
                        type="submit"
                        isPending={isSubmitting}
                        isDisabled={isSubmitted && isSubmitSuccessful}
                    >
                        {({isPending}) => (
                            <>
                                {isPending ? <Spinner color="current" size="sm" /> : null}
                                <div className="text-sm">Получить коммерческое предложение</div>
                            </>
                        )}
                    </BaseButton>
                </div>
            </div>
        </form>
    );
}