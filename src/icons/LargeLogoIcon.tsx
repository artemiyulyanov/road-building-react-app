import { LazyLoadImage } from 'react-lazy-load-image-component';
import icon from '@/assets/large-logo-icon.png';

export type LargeLogoIconProps = React.HTMLProps<HTMLDivElement>

export const LargeLogoIcon: React.FC<LargeLogoIconProps> = ({
    ...props
}) => {
    return (
        <div
            {...props}
        >
            <LazyLoadImage
                src={icon}
                alt="example"
                // effect="blur"
            />
        </div>
    );
}