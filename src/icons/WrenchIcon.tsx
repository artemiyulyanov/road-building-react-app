import { LazyLoadImage } from "react-lazy-load-image-component";
import icon from '@/assets/wrench-icon.png';

export type WrenchIconProps = React.HTMLProps<HTMLDivElement> & {
    contentClassName?: string
}

export const WrenchIcon: React.FC<WrenchIconProps> = ({
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