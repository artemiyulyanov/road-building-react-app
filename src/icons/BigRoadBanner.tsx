import { LazyLoadImage } from "react-lazy-load-image-component";

import icon from '@/assets/big-road-banner.svg';

export type BigRoadBannerProps = React.HTMLProps<HTMLDivElement> & {
    contentClassName?: string
}

export const BigRoadBanner: React.FC<BigRoadBannerProps> = ({
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