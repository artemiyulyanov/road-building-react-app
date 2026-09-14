import { FormSubmissionFailedStatus } from "@/ui/forms/FormSubmissionFailedStatus";
import { FormSubmissionSuccessfulStatus } from "@/ui/forms/FormSubmissionSuccessfulStatus";
import clsx from "clsx";
import { useState } from "react";
import { ComplexAsphaltingFormContent } from "./ComplexAsphaltingFormContent";

export type ComplexAsphaltingFormProps = React.HTMLProps<HTMLDivElement>

export const ComplexAsphaltingForm: React.FC<ComplexAsphaltingFormProps> = ({

}) => {
    const [submissionStatus, setSubmissionStatus] = useState<number | undefined>();

    return (
        <div className={clsx(
            "w-full h-auto",
        )}>
            <div
                id="complex-asphalting-form"
                className={clsx(
                    "w-full h-auto bg-dark-3 rounded-3xl p-4 sm:p-6"
                )}
            >
                {submissionStatus == undefined ?
                    <ComplexAsphaltingFormContent
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