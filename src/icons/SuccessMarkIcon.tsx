import { LazyLoadImage } from "react-lazy-load-image-component";

import icon from '@/assets/success-mark-icon.svg';

export type SuccessMarkIconProps = React.HTMLProps<HTMLDivElement> & {
    contentClassName?: string
}

export const SuccessMarkIcon: React.FC<SuccessMarkIconProps> = ({
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