import { ButtonArrowIcon } from "@/icons/ButtonArrowIcon";
import { Button, type ButtonProps } from "@heroui/react"
import clsx from "clsx";

export type PointerButtonProps = ButtonProps & {
    buttonClassName?: string
}

export const PointerButton: React.FC<PointerButtonProps> = ({
    children,
    buttonClassName,
    ...props
}) => {
    return (
        <Button
            className={clsx(
                "w-auto h-auto p-1 pl-3 bg-light text-dark rounded-full",
                "font-bold tracking-[-0.025em] text-base",
                "transition-all duration-300 hover:opacity-50",
                "flex flex-row gap-2",
                buttonClassName
            )}
            {...props}
        >
            <>
                {children}
                <div className="bg-dark p-3 rounded-full">
                    <ButtonArrowIcon
                        contentClassName={clsx(
                            ""
                        )}
                    />
                </div>
            </>
        </Button>
    );
}