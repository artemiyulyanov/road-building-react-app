import icon from '@/assets/meter-squared-icon.png';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export type MeterSquaredIconProps = React.HTMLProps<HTMLDivElement> & {
    contentClassName?: string
}

export const MeterSquaredIcon: React.FC<MeterSquaredIconProps> = ({
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