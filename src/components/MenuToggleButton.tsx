import { MenuToggleIcon } from "@/icons/MenuToggleIcon";
import { PlainButton } from "../ui/PlainButton";
import { useState } from "react";
import clsx from "clsx";
import { PlainText } from "@/ui/PlainText";
import { useScroll } from "@/shared/useScroll";
import { Popover } from "@heroui/react";

export type MenuToggleButtonProps = React.HTMLProps<HTMLDivElement> & {
    isUnwrapped: boolean
    setIsUnwrapped: React.Dispatch<React.SetStateAction<boolean>>
    darkMode: boolean
}

export const MenuToggleButton: React.FC<MenuToggleButtonProps> = ({
    isUnwrapped,
    setIsUnwrapped,
    darkMode
}) => {
    const handleClick = () => {
        setIsUnwrapped((isUnwrapped) => !isUnwrapped);
    }

    return (
        <div className="flex flex-col justify-center items-center">
            <PlainButton
                onClick={handleClick}
            >
                <MenuToggleIcon
                    contentClassName="scale-125 md:scale-100"
                    unwrapped={isUnwrapped}
                    darkMode={darkMode}         
                />
                <PlainText
                    textClassName={clsx(
                        "text-base font-bold",
                        "hidden md:block",
                        "transition-all duration-200",
                        !darkMode && 'text-light',
                        darkMode && 'text-dark'
                    )}
                >
                    Меню
                </PlainText>
            </PlainButton>
        </div>
    );
}