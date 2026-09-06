import { LazyLoadImage } from "react-lazy-load-image-component";

import icon from "@/assets/wrapper-icon.svg";

export type WrapperIconProps = React.HTMLProps<HTMLDivElement> & {
    contentClassName?: string
}

export const WrapperIcon: React.FC<WrapperIconProps> = ({
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