import { LazyLoadImage } from 'react-lazy-load-image-component';
import icon from '@/assets/button-arrow-icon.svg';
import clsx from 'clsx';

export type ButtonArrowIconProps = React.HTMLProps<HTMLDivElement> & {
    contentClassName?: string
    theme?: 'light' | 'primary' | 'dark'
}

export const ButtonArrowIcon: React.FC<ButtonArrowIconProps> = ({
    contentClassName,
    theme = 'light',
    ...props
}) => {
    return (
        <div 
            {...props} 
            className='w-2 h-2' 
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
            <svg 
                viewBox="-2 -2 81 81" 
                // fill="none" 
                className={clsx(
                    (theme == 'light') && 'fill-light',
                    (theme == 'dark') && 'fill-dark',
                    (theme == 'primary') && 'fill-primary',
                    "w-2 aspect-square"
                )}
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid meet"
            >
                <path 
                    d="M0 7C0 3.13 3.13 0 7 0H70C73.87 0 77 3.13 77 7V70C77 73.87 73.87 77 70 77C66.13 77 63 73.87 63 70V24L16 71L6 61L53 14H7C3.13 14 0 10.87 0 7Z" 
                />
            </svg>
        </div>
    );
}