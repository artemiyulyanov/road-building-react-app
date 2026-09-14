import icon from '@/assets/road-icon.png';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export type RoadIconProps = React.HTMLProps<HTMLDivElement> & {
    contentClassName?: string
}

export const RoadIcon: React.FC<RoadIconProps> = ({
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