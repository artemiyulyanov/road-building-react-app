import { LazyLoadImage } from "react-lazy-load-image-component";

import icon from '@/assets/delivery-icon.svg';

export type DeliveryIconProps = React.HTMLProps<HTMLDivElement> & {
    contentClassName?: string
}

export const DeliveryIcon: React.FC<DeliveryIconProps> = ({
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