import clsx from "clsx";
import { AdvantagesListDesktop } from "./AdvantagesListDesktop";
import { AdvantagesListMobile } from "./AdvantagesListMobile";

export type AdvantagesListProps = React.HTMLProps<HTMLDivElement>

export const AdvantagesList: React.FC<AdvantagesListProps> = ({

}) => {
    return (
        <>
            <AdvantagesListDesktop />
            <AdvantagesListMobile />
        </>
    );
}