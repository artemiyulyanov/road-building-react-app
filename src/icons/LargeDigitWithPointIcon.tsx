import { LazyLoadImage } from "react-lazy-load-image-component"

import One from '@/assets/01-with-point.svg?react'
import Two from '@/assets/02-with-point.svg?react'
import Three from '@/assets/03-with-point.svg?react'
import Four from '@/assets/04-with-point.svg?react'
import Five from '@/assets/05-with-point.svg?react'
import Six from '@/assets/06-with-point.svg?react'
import Seven from '@/assets/07-with-point.svg?react'
import clsx from "clsx";

export type LargeDigitWithPointIconProps = React.HTMLProps<HTMLDivElement> & {
    contentClassName?: string
    digit: '01' | '02' | '03' | '04' | '05' | '06' | '07'
    theme: 'dark' | 'light'
}

const icons = {
    '01': One,
    '02': Two,
    '03': Three,
    '04': Four,
    '05': Five,
    '06': Six,
    '07': Seven
}

export const LargeDigitWithPointIcon: React.FC<LargeDigitWithPointIconProps> = ({
    contentClassName,
    digit,
    theme,
    ...props
}) => {
    const Icon = icons[digit]

    return (
        <div
            {...props}
        >
            <Icon
                className={clsx(
                    contentClassName,
                    (theme == 'dark') && 'large-digit-icon-dark',
                    (theme == 'light') && 'large-digit-icon-light',
                )}
            />
        </div>
    );
}