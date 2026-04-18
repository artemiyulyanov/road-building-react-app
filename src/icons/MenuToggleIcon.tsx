import { LazyLoadImage } from 'react-lazy-load-image-component';
import menu_unwrapped from '@/assets/menu-unwrapped-icon.png';
import menu_wrapped from '@/assets/menu-wrapped-icon.png';
import clsx from 'clsx';

export type MenuToggleIconProps = React.HTMLProps<HTMLDivElement> & {
    unwrapped?: boolean
    contentClassName?: string
}

export const MenuToggleIcon: React.FC<MenuToggleIconProps> = ({
    unwrapped = false,
    contentClassName,
    ...props
}) => {
    return (
        <div
            {...props}
        >
            <LazyLoadImage
                key={unwrapped ? 'open' : 'close'}
                src={unwrapped ? menu_unwrapped : menu_wrapped}
                alt="example"
                className={clsx(
                    unwrapped ? "w-3" : "w-4",
                    "animate-[rotate-in_0.1s_ease-out_forwards]",
                    contentClassName
                )}
            />
        </div>
    );
}