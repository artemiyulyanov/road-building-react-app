import icon from '@/assets/human-icon.svg';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export type HumanIconProps = React.HTMLProps<HTMLDivElement> & {
    contentClassName?: string
}

export const HumanIcon: React.FC<HumanIconProps> = ({
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