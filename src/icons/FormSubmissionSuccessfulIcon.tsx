import icon from '@/assets/form-submission-successful-icon.svg';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export type FormSubmissionSuccessfulIconProps = React.HTMLProps<HTMLDivElement> & {
    contentClassName?: string
}

export const FormSubmissionSuccessfulIcon: React.FC<FormSubmissionSuccessfulIconProps> = ({
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