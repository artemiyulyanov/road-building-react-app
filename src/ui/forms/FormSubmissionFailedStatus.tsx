import { FormSubmissionSuccessfulIcon } from "@/icons/FormSubmissionSuccessfulIcon";
import { PlainText } from "../PlainText";
import { BaseButton } from "../BaseButton";
import clsx from "clsx";
import { FormSubmissionFailedIcon } from "@/icons/FormSubmissionFailedIcon";

export type FormSubmissionFailedStatusProps = React.HTMLProps<HTMLDivElement> & {
    message: string
    submissionStatus: number
    setSubmissionStatus: React.Dispatch<React.SetStateAction<number | undefined>>
}

export const FormSubmissionFailedStatus: React.FC<FormSubmissionFailedStatusProps> = ({
    message,
    submissionStatus,
    setSubmissionStatus
}) => {
    return (
        <div className="flex flex-col gap-6 justify-center items-center sm:py-4">
            <div className="flex flex-col gap-4 justify-center items-center pt-2 sm:pt-0">
                <div className="w-12 sm:w-16 h-auto">
                    <FormSubmissionFailedIcon />
                </div>
                <PlainText
                    textClassName={clsx(
                        "text-lg lg:text-xl font-medium",
                        "text-center leading-[0.95]",
                        "text-light"
                    )}
                >
                    {message} ({submissionStatus})
                </PlainText>
            </div>
            <BaseButton 
                theme="transparent"
                buttonClassName={clsx(
                    "w-full sm:w-auto",
                    "px-[15px] py-[15px] sm:px-[10px] sm:py-[10px]",
                )}
                onPress={() => setSubmissionStatus(undefined)}
            >
                <div className="text-sm sm:text-xs md:text-sm">Заполнить ещё раз</div>
            </BaseButton>
        </div>
    );
}