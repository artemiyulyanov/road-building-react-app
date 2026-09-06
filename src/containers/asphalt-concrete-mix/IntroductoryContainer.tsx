import { PlainText } from "@/ui/PlainText";
import { PointerButton } from "@/ui/PointerButton";
import { Link } from "@heroui/react";
import clsx from "clsx";
import banner from '@/assets/introductory-banner/asphalt-concrete-mix.png';
import { useAnchorMenu } from "@/shared/useAnchorMenu";

export type IntroductoryContainerProps = React.HTMLProps<HTMLDivElement>

export const IntroductoryContainer: React.FC<IntroductoryContainerProps> = () => {
    const scrollToTurnkeyAsphaltingForm = useAnchorMenu('turnkey-asphalting-form');

    return (
        <div
            className={clsx(
                "max-w-screen bg-center bg-no-repeat relative",
                "h-[95vh] md:h-screen",
                "bg-cover",
                "rounded-b-3xl",
                "flex items-center justify-center bg-red-500",
            )}
            style={{ 
                backgroundImage: `url(${banner})`
            }}
        >
            <div className={clsx(
                "h-full flex flex-col items-center justify-center relative",
                'w-full md:w-3/4 lg:w-2/3',
                'pt-[15px] pb-[15px] pl-[20px] pr-[20px] md:p-0',
            )}>
                <div
                    className="flex flex-col gap-[40px] items-center"
                > 
                    <div
                        className="flex flex-col gap-[10px] items-center"
                    >
                        <PlainText
                            textClassName={clsx(
                                "whitespace-pre",
                                "text-sm lg:text-sm font-bold",
                                "bg-background color-dark",
                                "pl-[10px] pr-[10px] pt-[5px] pb-[5px]",
                                "rounded-full"
                            )}
                        >
                            Гарант качества
                        </PlainText>
                        <PlainText
                            textClassName={clsx(
                                "text-5xl md:text-6xl font-medium",
                                "text-light text-center"
                            )}
                        >
                            Продажа асфальтобетонных смесей от производителя
                        </PlainText>
                        <PlainText
                            textClassName={clsx(
                                "text-lg md:text-xl font-medium",
                                "text-light text-center opacity-75 "
                            )}
                        >
                            Асфальтобетонные смеси по ГОСТ с доставкой
                        </PlainText>
                    </div>
                    <Link
                        // href="#turnkey-asphalting-form"
                        className="no-underline text-inherit"
                        onClickCapture={scrollToTurnkeyAsphaltingForm}
                    >
                        <PointerButton>
                            Получить цену
                        </PointerButton>
                    </Link>
                </div>
            </div>
        </div>
    );
}