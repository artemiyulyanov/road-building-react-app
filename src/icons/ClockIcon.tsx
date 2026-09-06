import { LazyLoadImage } from "react-lazy-load-image-component";

import icon from '@/assets/clock-icon.png';

export type ClockIconProps = React.HTMLProps<HTMLDivElement> & {
    contentClassName?: string
}

export const ClockIcon: React.FC<ClockIconProps> = ({
    contentClassName,
    ...props
}) => {
    return (
        <div
            {...props}
        >
            <LazyLoadImage
                src={icon}
                alt="example"
                className={contentClassName}
            />
        </div>
    );
}