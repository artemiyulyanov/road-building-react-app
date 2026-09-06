import one from '@/assets/01.svg';
import two from '@/assets/02.svg';
import three from '@/assets/03.svg';
import four from "@/assets/04.svg";
import five from "@/assets/05.svg";
import six from "@/assets/06.svg";
import seven from "@/assets/07.svg";
import eight from "@/assets/08.svg";
import { LazyLoadImage } from 'react-lazy-load-image-component';

export type LargeDigitIconProps = React.HTMLProps<HTMLDivElement> & {
    contentClassName?: string
    digit: '01' | '02' | '03' | '04' | '05' | '06' | '07' | '08'
}

const icons = {
    '01': one,
    '02': two,
    '03': three,
    '04': four,
    '05': five,
    '06': six,
    '07': seven,
    '08': eight
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