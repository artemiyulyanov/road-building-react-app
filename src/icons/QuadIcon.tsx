import { LazyLoadImage } from "react-lazy-load-image-component";

import icon from '@/assets/quad-icon.svg';

export type QuadIconProps = React.HTMLProps<HTMLDivElement> & {
    contentClassName?: string
}

export const QuadIcon: React.FC<QuadIconProps> = ({
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