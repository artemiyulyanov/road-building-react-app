import { asphaltTypes, isAsphaltType, type TurnkeyAsphaltFormData } from "@/entities/entities.types";
import { BaseButton } from "@/ui/BaseButton";
import { BaseRadio } from "@/ui/BaseRadio";
import { Description, FieldError, Input, Label, RadioGroup, Spinner, TextArea, TextField } from "@heroui/react";
import clsx from "clsx";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { TurnkeyAsphaltingFormContent } from "./TurnkeyAsphaltingFormContent";
import { FormSubmissionSuccessfulStatus } from "@/ui/forms/FormSubmissionSuccessfulStatus";
import { FormSubmissionFailedStatus } from "@/ui/forms/FormSubmissionFailedStatus";

export type TurnkeyAsphaltingFormProps = React.HTMLProps<HTMLDivElement>

export const TurnkeyAsphaltingForm: React.FC<TurnkeyAsphaltingFormProps> = ({

}) => {
    const [submissionStatus, setSubmissionStatus] = useState<number | undefined>(200);

    return (
        <div className={clsx(
            "w-full h-auto",
            'pl-[20px] pr-[20px] md:pl-[40px] md:pr-[40px]',
        )}>
            <div
                id="turnkey-asphalting-form"
                className={clsx(
                    "w-full h-auto bg-dark-3 rounded-3xl p-4 sm:p-6"
                )}
            >
                {submissionStatus == undefined ?
                    <TurnkeyAsphaltingFormContent 
                        submissionStatus={submissionStatus}
                        setSubmissionStatus={setSubmissionStatus}
                    />
                :
                    (submissionStatus == 200) ? 
                        <FormSubmissionSuccessfulStatus 
                            message="Ваша заявка была успешно отправлена!"
                            submissionStatus={submissionStatus}
                            setSubmissionStatus={setSubmissionStatus}
                        /> 
                        : 
                        <FormSubmissionFailedStatus 
                            message="Что-то пошло не так! Повторите попытку позже"
                            submissionStatus={submissionStatus}
                            setSubmissionStatus={setSubmissionStatus}
                        /> 
                }
            </div> 
        </div>
    );
}