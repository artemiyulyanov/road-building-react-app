import { LazyLoadImage } from "react-lazy-load-image-component";

import icon from '@/assets/delivery-dark-icon.svg';

export type DeliveryDarkIconProps = React.HTMLProps<HTMLDivElement> & {
    contentClassName?: string
}

export const DeliveryDarkIcon: React.FC<DeliveryDarkIconProps> = ({
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