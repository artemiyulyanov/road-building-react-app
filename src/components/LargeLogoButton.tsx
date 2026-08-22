import { LargeLogoIcon } from "@/icons/LargeLogoIcon";
import clsx from "clsx";
import { PlainButton } from "../ui/PlainButton";

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
                    "relative w-72 md:w-80"
                )}
            />
        </PlainButton>
    );
}