import clsx from "clsx";
import { LargeLogoButton } from "./LargeLogoButton";
import { MenuToggleButton } from "./MenuToggleButton";

export const Menu = () => {
    return (
        <div
            className={clsx(
                'fixed w-full z-[999999999]',
                'pt-[15px] pb-[15px] pl-[20px] pr-[20px]',
                "flex flex-row justify-between",
            )}
        >
            <LargeLogoButton />
            <MenuToggleButton />
        </div>
    );
}