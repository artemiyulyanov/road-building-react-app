import icon from '@/assets/form-submission-failed-icon.svg';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export type FormSubmissionFailedIconProps = React.HTMLProps<HTMLDivElement> & {
    contentClassName?: string
}

export const FormSubmissionFailedIcon: React.FC<FormSubmissionFailedIconProps> = ({
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