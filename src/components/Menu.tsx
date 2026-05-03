import clsx from "clsx";
import { LargeLogoButton } from "./LargeLogoButton";
import { MenuToggleButton } from "./MenuToggleButton";
import { useScroll } from "@/shared/useScroll";
import { useState } from "react";
import { PlainText } from "@/ui/PlainText";
import { Link } from "@heroui/react";
import { PlainButton } from "@/ui/PlainButton";
import type { SitemapLink } from "@/entities/entities.types";

const menuSitemap: Array<SitemapLink> = [
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

export const Menu = () => {
    const [isUnwrapped, setIsUnwrapped] = useState<boolean>(false);
    const scrolled = useScroll();

    return (
        <div
            className={clsx(
                'fixed overflow-visible w-full z-[999999999]',
                'pt-[15px] pb-[15px] pl-[20px] pr-[20px]',
                "flex flex-col items-start gap-4",
                "transparent-all duration-200",
                (!scrolled && !isUnwrapped) && 'bg-transparent',
                (scrolled || isUnwrapped) && 'bg-light',
                !isUnwrapped && 'h-auto',
                isUnwrapped && 'h-screen'
            )}
        >
            <div className="w-full flex flex-row items-center justify-between">
                <LargeLogoButton
                    isUnwrapped={isUnwrapped}
                    setIsUnwrapped={setIsUnwrapped}
                    darkMode={scrolled || isUnwrapped} 
                />
                <MenuToggleButton 
                    isUnwrapped={isUnwrapped}
                    setIsUnwrapped={setIsUnwrapped}
                    darkMode={scrolled || isUnwrapped}
                />
            </div>
            <div className={clsx(
                "w-full flex flex-col items-end gap-4",
                !isUnwrapped && 'hidden'
            )}>
                <PlainText
                    textClassName={clsx(
                        "relative font-bold break-words",
                        "text-base xl:text-lg leading-[0.95] text-dark text-right"
                    )}
                >
                    Карта сайта
                </PlainText>
                <div className={clsx(
                    "flex flex-col items-end gap-1"
                )}>
                    {menuSitemap.map(link =>
                        <Link
                            href={link.href}
                            className="no-underline text-inherit"
                            onClickCapture={() => setIsUnwrapped(false)}
                        >
                            <PlainButton hoverEffects={false}>
                                <PlainText
                                    textClassName={clsx(
                                        "relative font-bold break-words",
                                        "transition-all duration-200",
                                        "text-base xl:text-lg leading-[0.95] text-dark/25 hover:text-dark text-right"
                                    )}
                                >
                                    {link.text}
                                </PlainText>
                            </PlainButton>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
}