import clsx from "clsx";
import banner from '@/assets/introductory-banner.png';
import { PlainText } from "@/ui/PlainText";
import { PointerButton } from "@/ui/PointerButton";

export type HomeIntroductoryContainerProps = React.HTMLProps<HTMLDivElement> & {

};

export const HomeIntroductoryContainer: React.FC<HomeIntroductoryContainerProps> = ({
    ...props
}) => {
    return (
        <div
            className={clsx(
                "max-w-screen bg-center bg-no-repeat relative",
                "h-[95vh] md:h-screen",
                "bg-[length:110%_auto] md:bg-[length:110%_auto]",
                "rounded-b-3xl",
                "flex items-center justify-center",
            )}
            style={{ 
                backgroundImage: `url(${banner})`
            }}
        >
            <div className={clsx(
                "h-full flex flex-col items-center justify-center relative",
                'w-full md:w-1/3',
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
                                "text-xs lg:text-sm font-bold",
                                "bg-background color-dark",
                                "pl-[10px] pr-[10px] pt-[5px] pb-[5px]",
                                "rounded-full"
                            )}
                        >
                            Производство и продажа асфальта в г.Новосибирске
                        </PlainText>
                        <PlainText
                            textClassName={clsx(
                                "text-6xl font-medium",
                                "text-light text-center"
                            )}
                        >
                            Мы кладём асфальт
                        </PlainText>
                        <PlainText
                            textClassName={clsx(
                                "text-xl font-medium",
                                "text-light text-center opacity-75 leading-[0.95]"
                            )}
                        >
                            Имеем два асфальтовых завода по разным берегам Новосибирска, имульсионую установку, а так же полный комплекс дорожной спец техники.
                        </PlainText>
                    </div>
                    <PointerButton>
                        Оставить заявку
                    </PointerButton>
                </div>
                <PlainText
                    textClassName={clsx(
                        "text-sm font-medium",
                        "text-light text-center opacity-50 leading-[0.95]",
                        "absolute bottom-0 pb-8"
                    )}
                >
                    Работаем в соответствие со стандартами ГОСТ
                </PlainText>
            </div>
        </div>
    );
}