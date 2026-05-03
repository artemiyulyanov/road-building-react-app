import { ContactClause } from "@/components/ContactClause";
import type { Contact } from "@/entities/entities.types";
import { PlainText } from "@/ui/PlainText";
import clsx from "clsx";

export type ContactsContainerProps = React.HTMLProps<HTMLDivElement>

const contacts: Array<Contact> = [
    {
        text: "Левый берег",
        subtext: ["с. Толмачево, 3307 километр, 20/2"]
    },
    {
        text: "Правый берег",
        subtext: ["ул. Армейский микрорайон, 12a"]
    },
    {
        text: "График работы",
        subtext: ["Пн-Пт 9:00 — 20:00", "Сб-Вс 9:00 — 17:00"]
    },
    {
        text: "Телефоны",
        subtext: ["+7 913 912-61-39", "+7 961 873-31-51"]
    },
    {
        text: "Почта",
        subtext: ["tds.abz18@gmail.com", "igortds6139@gmail.com"]
    },
];

export const ContactsContainer = ({
    
}) => {
    return (
        <div 
            className={clsx(
                "w-full h-auto",
                "pl-[20px] pr-[20px] md:pl-[40px] md:pr-[40px]"
            )}
            id="contacts-container"
        >
            <div className={clsx(
                "w-full rounded-3xl",
                "flex flex-col gap-8"
            )}>
                <PlainText
                    textClassName={clsx(
                        "relative font-medium break-words",
                        "text-xl xl:text-2xl leading-[0.95] text-light"
                    )}
                >
                    Где нас искать?
                </PlainText>
                <div className={clsx(
                    'w-full grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-4'
                )}>
                    {contacts.map(clause => <ContactClause clause={clause} />)}
                </div>
            </div>
        </div>
    );
}