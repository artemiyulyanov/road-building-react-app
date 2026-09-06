import { LazyLoadImage } from "react-lazy-load-image-component";

import icon from '@/assets/delivery-light-icon.png';

export type DeliveryLightIconProps = React.HTMLProps<HTMLDivElement> & {
    contentClassName?: string
}

export const DeliveryLightIcon: React.FC<DeliveryLightIconProps> = ({
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