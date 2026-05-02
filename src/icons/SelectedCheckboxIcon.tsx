import clsx from "clsx";
import { LazyLoadImage } from "react-lazy-load-image-component";

import icon from '@/assets/selected-checkbox-icon.svg';

export type SelectedCheckboxIconProps = React.HTMLProps<HTMLDivElement> & {
    contentClassName?: string
}

export const SelectedCheckboxIcon: React.FC<SelectedCheckboxIconProps> = ({
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
                className={clsx(
                    contentClassName
                )}
            />
        </div>
    );
}