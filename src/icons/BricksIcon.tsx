import { LazyLoadImage } from "react-lazy-load-image-component";

import icon from '@/assets/bricks-icon.svg';

export type BricksIconProps = React.HTMLProps<HTMLDivElement> & {
    contentClassName?: string
}

export const BricksIcon: React.FC<BricksIconProps> = ({
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