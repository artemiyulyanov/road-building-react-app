import { LargeLogoIcon } from "@/icons/LargeLogoIcon";
import { Button } from "@heroui/react";
import clsx from "clsx";
import { PlainButton } from "../ui/PlainButton";
import { useScroll } from "@/shared/useScroll";

export type LargeLogoButtonProps = React.HTMLProps<HTMLDivElement> & {

}

export const LargeLogoButton: React.FC<LargeLogoButtonProps> = ({

}) => {
    const scrolled = useScroll();

    const handleClick = () => {
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
                darkMode={scrolled}
                className={clsx(
                    "relative w-36 md:w-40"
                )}
            />
        </PlainButton>
    );
}