import { LazyLoadImage } from "react-lazy-load-image-component";
import icon from '@/assets/clock-icon.png';

export type ClockLightIconProps = React.HTMLProps<HTMLDivElement> & {
    contentClassName?: string
}

export const ClockLightIcon: React.FC<ClockLightIconProps> = ({
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