import icon from '@/assets/earth-icon.svg';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export type EarthIconProps = React.HTMLProps<HTMLDivElement> & {
    contentClassName?: string
}

export const EarthIcon: React.FC<EarthIconProps> = ({
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