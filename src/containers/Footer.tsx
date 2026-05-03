import type { SitemapLink } from "@/entities/entities.types";
import { LargeLogoIcon } from "@/icons/LargeLogoIcon";
import { PlainButton } from "@/ui/PlainButton";
import { PlainText } from "@/ui/PlainText";
import { PointerButton } from "@/ui/PointerButton";
import { Link } from "@heroui/react";
import clsx from "clsx";

export type FooterProps = React.HTMLProps<HTMLDivElement>

const footerSitemap: Array<SitemapLink> = [
    {
        text: "Наши клиенты",
        href: "#our-clients-container"
    },
    {
        text: "Чем мы занимаемся",
        href: "#collaboration-container"
    },
    {
        text: "Лаборатория",
        href: "#laboratory-container"
    },
    {
        text: "Аренда спецтехники",
        href: "#rent-equipment-container"
    },
    {
        text: "Асфальтирование под ключ",
        href: "#turnkey-asphalting-container"
    },
    {
        text: "Контакты",
        href: "#contacts-container"
    }
];

export const Footer: React.FC<FooterProps> = ({

}) => {
    return (
        <div className={clsx(
            "w-full h-auto p-4"
        )}>
            <div className={clsx(
                "w-full bg-dark-3",
                "rounded-3xl p-4 sm:p-6",
                "grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8"
            )}>
                <div className={clsx(
                    "w-full flex flex-col gap-6 sm:gap-8"
                )}>
                    <LargeLogoIcon 
                        className={clsx(
                            "relative w-36 md:w-40"
                        )}
                    />
                    <div className="flex flex-col gap-1">
                        <PlainText
                            textClassName={clsx(
                                "relative font-medium break-words",
                                "text-lg xl:text-xl leading-[0.95] text-light"
                            )}
                        >
                            Хотите работать с нами?
                        </PlainText>
                        <PlainText
                            textClassName={clsx(
                                "relative font-medium break-words",
                                "text-sm xl:text-base leading-[0.95] text-light/50"
                            )}
                        >
                            Оставьте заявку на покладку асфальта
                        </PlainText>
                    </div>
                    <Link
                        href="#turnkey-asphalting-form"
                        className="no-underline text-inherit"
                    >
                        <PointerButton 
                            theme="primary"
                            buttonClassName={clsx(
                                "text-base w-auto sm:w-auto"
                            )}
                        >
                            <div className="w-full sm:w-auto text-sm">
                                Оставить заявку
                            </div>
                        </PointerButton>
                    </Link>
                </div>
                <div className="w-full flex flex-col pt-2">
                    <div className={clsx(
                        "flex flex-col gap-2 items-start",
                        "border-l border-l-1 border-light/25 pl-2 pb-2"
                    )}>
                        {footerSitemap.map(link =>
                            <Link
                                href={link.href}
                                className="no-underline text-inherit"
                            >
                                <PlainButton
                                >
                                    <PlainText
                                        textClassName={clsx(
                                            "relative font-medium break-words",
                                            "text-sm xl:text-base leading-[0.95] text-light"
                                        )}
                                    >
                                        {link.text}
                                    </PlainText>
                                </PlainButton>
                            </Link>
                        )}
                    </div>
                </div>
                <PlainText
                    textClassName={clsx(
                        "relative font-medium break-words",
                        "text-xs xl:text-sm leading-[0.95] text-light/50"
                    )}
                >
                    ©2026 / Все права защищены
                </PlainText>
            </div>
        </div>
    );
}