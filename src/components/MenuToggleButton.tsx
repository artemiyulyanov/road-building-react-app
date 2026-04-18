import { MenuToggleIcon } from "@/icons/MenuToggleIcon";
import { PlainButton } from "../ui/PlainButton";
import { useState } from "react";
import clsx from "clsx";
import { PlainText } from "@/ui/PlainText";
import { useScroll } from "@/shared/useScroll";

export type MenuToggleButtonProps = React.HTMLProps<HTMLDivElement>

export const MenuToggleButton: React.FC<MenuToggleButtonProps> = ({

}) => {
    const [isUnwrapped, setIsUnwrapped] = useState<boolean>(false);
    const scrolled = useScroll();

    const handleClick = () => {
        setIsUnwrapped((isUnwrapped) => !isUnwrapped);
    }

    return (
        <div className="flex items-center">
            <PlainButton
                onClick={handleClick}
            >
                <MenuToggleIcon
                    contentClassName="scale-125 md:scale-100"
                    unwrapped={isUnwrapped}           
                />
                <PlainText
                    textClassName={clsx(
                        "text-base font-bold",
                        "hidden md:block",
                        "transition-all duration-200",
                        !scrolled && 'text-light',
                        scrolled && 'text-dark'
                    )}
                >
                    Меню
                </PlainText>
            </PlainButton>
        </div>
    );
}