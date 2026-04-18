import { LazyLoadImage } from "react-lazy-load-image-component";

import icon from '@/assets/thunderbolt-icon.svg';

export type ThunderboltIconProps = React.HTMLProps<HTMLDivElement> & {
    contentClassName?: string
}

export const ThunderboltIcon: React.FC<ThunderboltIconProps> = ({
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