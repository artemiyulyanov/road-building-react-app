import { LazyLoadImage } from "react-lazy-load-image-component";

import icon_desktop from '@/assets/turnkey-asphalting-clause-arrow.png';
import icon_mobile from '@/assets/turnkey-asphalting-clause-mobile-arrow.png';

import clsx from "clsx";

export type TurnkeyAsphaltingClauseArrowIconProps = React.HTMLProps<HTMLDivElement> & {
    contentClassName?: string
}

export const TurnkeyAsphaltingClauseArrowIcon: React.FC<TurnkeyAsphaltingClauseArrowIconProps> = ({
    contentClassName,
    ...props
}) => {
    return (
        <div
            {...props}
        >
            <LazyLoadImage
                src={icon_desktop}
                alt="example"
                className={clsx(
                    "hidden sm:block",
                    contentClassName
                )}
            />
            <LazyLoadImage
                src={icon_mobile}
                alt="example"
                className={clsx(
                    "sm:hidden",
                    contentClassName
                )}
            />
        </div>
    );
}