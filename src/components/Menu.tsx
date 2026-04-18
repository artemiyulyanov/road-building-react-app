import clsx from "clsx";
import { LargeLogoButton } from "./LargeLogoButton";
import { MenuToggleButton } from "./MenuToggleButton";
import { useScroll } from "@/shared/useScroll";

export const Menu = () => {
    const scrolled = useScroll();

    return (
        <div
            className={clsx(
                'fixed w-full z-[999999999]',
                'pt-[15px] pb-[15px] pl-[20px] pr-[20px]',
                "flex flex-row justify-between",
                "transparent-all duration-200",
                !scrolled && 'bg-transparent',
                scrolled && 'bg-light'
            )}
        >
            <LargeLogoButton />
            <MenuToggleButton />
        </div>
    );
}