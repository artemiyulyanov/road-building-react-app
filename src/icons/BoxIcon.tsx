import icon from '@/assets/box-icon.png';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export type BoxIconProps = React.HTMLProps<HTMLDivElement> & {
    contentClassName?: string
}

export const BoxIcon: React.FC<BoxIconProps> = ({
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