import one from '@/assets/01.svg';
import two from '@/assets/02.svg';
import three from '@/assets/03.svg';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export type LargeDigitIconProps = React.HTMLProps<HTMLDivElement> & {
    contentClassName?: string
    digit: '01' | '02' | '03'
}

const icons = {
    '01': one,
    '02': two,
    '03': three
}

export const LargeDigitIcon: React.FC<LargeDigitIconProps> = ({
    contentClassName,
    digit,
    ...props
}) => {
    return (
        <div
            {...props}
        >
            <LazyLoadImage
                src={icons[digit]}
                alt="example"
                className={contentClassName}
            />
        </div>
    );
}