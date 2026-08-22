import clsx from "clsx";
import { LargeLogoButton } from "./LargeLogoButton";
import { MenuToggleButton } from "./MenuToggleButton";
import { useScroll } from "@/shared/useScroll";
import { useState } from "react";
import { PlainText } from "@/ui/PlainText";
import { Link } from "@heroui/react";
import { PlainButton } from "@/ui/PlainButton";
import type { SitemapLink } from "@/entities/entities.types";
import { useAnchorMenu } from "@/shared/useAnchorMenu";
import menuBg from "@/assets/menu-background.png";

const menuSitemap: Array<SitemapLink> = [
    {
        text: "Наши клиенты",
        scrollTo: useAnchorMenu("our-clients-container")
    },
    {
        text: "Чем мы занимаемся",
        scrollTo: useAnchorMenu("collaboration-container")
    },
    {
        text: "Лаборатория",
        scrollTo: useAnchorMenu("laboratory-container")
    },
    {
        text: "Аренда спецтехники",
        scrollTo: useAnchorMenu("rent-equipment-container")
    },
    {
        text: "Асфальтирование под ключ",
        scrollTo: useAnchorMenu("turnkey-asphalting-container")
    },
    {
        text: "Контакты",
        scrollTo: useAnchorMenu("contacts-container")
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
                "transition-all duration-200",
                !isUnwrapped && 'h-auto',
                isUnwrapped && 'h-screen'
            )}
            style={{
                backgroundColor: (!scrolled && !isUnwrapped) ? 'transparent' : 'var(--color-light)',
            }}
        >
            {isUnwrapped && (
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundImage: `url(${menuBg})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        animation: 'fadeIn 0.4s ease forwards',
                    }}
                />
            )}
            {isUnwrapped && (
                <div
                    className="absolute inset-0 z-[1]"
                    style={{ backgroundColor: 'rgba(255,255,255,0.65)' }}
                />
            )}
            <div className="relative z-10 w-full flex flex-row items-center justify-between">
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
                "relative z-10 w-full flex flex-col items-end gap-4",
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
                <div className="flex flex-col items-end gap-1">
                    {menuSitemap.map(link =>
                        <Link
                            className="no-underline text-inherit group"
                            onClickCapture={() => {
                                setIsUnwrapped(false)
                                link.scrollTo();
                            }}
                        >
                            <PlainButton hoverEffects={false}>
                                <PlainText
                                    textClassName={clsx(
                                        "relative font-bold break-words",
                                        "transition-all duration-200",
                                        "text-base xl:text-lg leading-[0.95] text-right",
                                        "text-black hover:text-black/50"
                                    )}
                                >
                                    {link.text}
                                </PlainText>
                            </PlainButton>
                        </Link>
                    )}
                </div>
            </div>
            <style>{`
               @keyframes fadeIn {
                   from { opacity: 0; }
                   to { opacity: 1; }
               }
           `}</style>
        </div>
    );
}
