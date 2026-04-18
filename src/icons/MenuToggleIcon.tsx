import { LazyLoadImage } from 'react-lazy-load-image-component';
import clsx from 'clsx';

// import menu_unwrapped_light from '@/assets/menu-unwrapped-light-icon.png';
// import menu_wrapped_light from '@/assets/menu-wrapped-light-icon.png';

// import menu_unwrapped_dark from '@/assets/menu-unwrapped-dark-icon.png';
// import menu_wrapped_dark from '@/assets/menu-wrapped-dark-icon.png';
import { useScroll } from '@/shared/useScroll';

// import menu_unwrapped_icon from '@/assets/menu-unwrapped-icon.svg';
// import menu_wrapped_icon from '@/assets/menu-wrapped-icon.svg';

export type MenuToggleIconProps = React.HTMLProps<HTMLDivElement> & {
    unwrapped?: boolean
    contentClassName?: string
}

export const MenuToggleIcon: React.FC<MenuToggleIconProps> = ({
    unwrapped = false,
    contentClassName,
    ...props
}) => {
    const scrolled = useScroll();

    return (
        <div
            {...props}
        >
            {unwrapped ?      
                <svg 
                    width="15" 
                    height="15" 
                    viewBox="0 0 15 15" 
                    xmlns="http://www.w3.org/2000/svg"
                    className={clsx(
                        "w-3 aspect-square",
                        "animate-[rotate-in_0.1s_ease-out_forwards]",
                        "transition-all duration-200",
                        !scrolled && 'fill-light',
                        scrolled && 'fill-dark',
                        contentClassName
                    )}
                >
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.292893 0.292672C0.683441 -0.0974298 1.31657 -0.0976846 1.70696 0.292672L7.36418 5.9499L13.0214 0.293648C13.4119 -0.0968756 14.0459 -0.096876 14.4364 0.293648C14.8265 0.684196 14.8268 1.31732 14.4364 1.70771L8.77824 7.36494L14.4345 13.0212C14.8249 13.4117 14.825 14.0448 14.4345 14.4353C14.044 14.8257 13.4109 14.8257 13.0204 14.4353L7.36418 8.779L1.70793 14.4353C1.3174 14.8257 0.684369 14.8257 0.29387 14.4353C-0.0965539 14.0447 -0.0965539 13.4117 0.29387 13.0212L5.95012 7.36494L0.292893 1.70771C-0.0976309 1.31719 -0.0976312 0.683196 0.292893 0.292672Z" />
                </svg>
            :
                <svg 
                    width="20" 
                    height="12" 
                    viewBox="0 0 20 12" 
                    xmlns="http://www.w3.org/2000/svg"
                    className={clsx(
                        "w-4 aspect-square",
                        "animate-[rotate-in_0.1s_ease-out_forwards]",
                        "transition-all duration-200",
                        !scrolled && 'fill-light',
                        scrolled && 'fill-dark',
                        contentClassName
                    )}
                >
                    <g clip-path="url(#clip0_251_2)">
                        <path d="M19 0C19.5523 0 20 0.447715 20 1C20 1.55228 19.5523 2 19 2H1C0.447715 2 0 1.55228 0 1C0 0.447715 0.447715 0 1 0H19Z" />
                        <path d="M19 5C19.5523 5 20 5.44772 20 6C20 6.55228 19.5523 7 19 7H1C0.447715 7 0 6.55228 0 6C0 5.44772 0.447715 5 1 5H19Z" />
                        <path d="M19 10C19.5523 10 20 10.4477 20 11C20 11.5523 19.5523 12 19 12H1C0.447715 12 0 11.5523 0 11C0 10.4477 0.447715 10 1 10H19Z" />
                    </g>
                </svg>
            }
        </div>
    );
}