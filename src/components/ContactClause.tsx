import type { Contact } from "@/entities/entities.types";
import { PlainText } from "@/ui/PlainText";
import clsx from "clsx";

export type ContactClauseProps = React.HTMLProps<HTMLDivElement> & {
    clause: Contact
}

export const ContactClause: React.FC<ContactClauseProps> = ({
    clause
}) => {
    return (
        <div className="flex flex-col gap-2">
            <PlainText
                textClassName={clsx(
                    "relative font-medium break-words",
                    "text-lg xl:text-xl leading-[0.95] text-light"
                )}
            >
                {clause.text}
            </PlainText>
            <div className="flex flex-col gap-1">
                {clause.subtext.map(line =>
                    <PlainText
                        textClassName={clsx(
                            "relative font-medium break-words",
                            "text-sm xl:text-base leading-[0.95] text-light/50"
                        )}
                    >
                        {line}
                    </PlainText>
                )}
            </div>
        </div>
    );
}