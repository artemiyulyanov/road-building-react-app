import { LargeLogoIcon } from "@/icons/LargeLogoIcon";
import { Button } from "@heroui/react";
import clsx from "clsx";
import { PlainButton } from "../ui/PlainButton";

export type LargeLogoButtonProps = React.HTMLProps<HTMLDivElement> & {

}

export const LargeLogoButton: React.FC<LargeLogoButtonProps> = ({

}) => {
    return (
        <PlainButton
        >
            <LargeLogoIcon 
                className={clsx(
                    "relative w-36 md:w-42"
                )}
            />
        </PlainButton>
    );
}