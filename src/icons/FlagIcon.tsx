import icon from '@/assets/flag-icon.svg';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export type FlagIconProps = React.HTMLProps<HTMLDivElement> & {
    contentClassName?: string
}

export const FlagIcon: React.FC<FlagIconProps> = ({
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