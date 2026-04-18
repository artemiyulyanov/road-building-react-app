import { LazyLoadImage } from 'react-lazy-load-image-component';
import icon from '@/assets/button-arrow-icon.svg';

export type ButtonArrowIconProps = React.HTMLProps<HTMLDivElement> & {
    contentClassName?: string
}

export const ButtonArrowIcon: React.FC<ButtonArrowIconProps> = ({
    contentClassName,
    ...props
}) => {
    return (
        <div {...props} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img
                src={icon}
                width={8}
                height={8}
                className={contentClassName}
                alt="arrow"
            />
        </div>
    );
}