import { LazyLoadImage } from "react-lazy-load-image-component";
import icon from '@/assets/clock-icon-dark.png';

export type ClockDarkIconProps = React.HTMLProps<HTMLDivElement> & {
    contentClassName?: string
}

export const ClockDarkIcon: React.FC<ClockDarkIconProps> = ({
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