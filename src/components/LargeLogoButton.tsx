import { LargeLogoIcon } from "@/icons/LargeLogoIcon";
import { Button } from "@heroui/react";
import clsx from "clsx";
import { PlainButton } from "../ui/PlainButton";
import { useScroll } from "@/shared/useScroll";

export type LargeLogoButtonProps = React.HTMLProps<HTMLDivElement> & {
    isUnwrapped: boolean
    setIsUnwrapped: React.Dispatch<React.SetStateAction<boolean>>
    darkMode: boolean
}

export const LargeLogoButton: React.FC<LargeLogoButtonProps> = ({
    isUnwrapped,
    setIsUnwrapped,
    darkMode
}) => {
    const handleClick = () => {
        setIsUnwrapped(false);
        
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }

    return (
        <PlainButton
            onClick={handleClick}
        >
            <LargeLogoIcon 
                darkMode={darkMode}
                className={clsx(
                    "relative w-36 md:w-40"
                )}
            />
        </PlainButton>
    );
}