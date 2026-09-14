import { AdvantagesList } from "@/components/trusted-facility/AdvantagesList";
import { BigRoadBanner } from "@/icons/BigRoadBanner";
import { LargeLogoIcon } from "@/icons/LargeLogoIcon";
import { useAnchorMenu } from "@/shared/useAnchorMenu";
import { PlainText } from "@/ui/PlainText";
import { PointerButton } from "@/ui/PointerButton";
import { Tag } from "@/ui/Tag";
import { Link } from "@heroui/react";
import clsx from "clsx";

export type CostOfAsphaltingContainerProps = React.HTMLProps<HTMLDivElement>

const tags: Array<string> = [
    "площади объекта",
    "состава и толщины дорожной одежды",
    "объёмов подготовительных работ",
    "особенностей участка",
    "используемых материалов",
    "удалённости объекта",
];

export const CostOfAsphaltingContainer: React.FC<CostOfAsphaltingContainerProps> = ({

}) => {
    const scrollToForm = useAnchorMenu('form-container');

    return (
        <div 
            className={clsx(
                "w-full h-auto",
                "pl-[20px] pr-[20px] md:pl-[40px] md:pr-[40px]",
                "flex flex-col gap-6"
            )}
            id="cost-of-asphalting-container"
        >
            <div className={clsx(
                "w-full h-auto",
                "flex flex-col gap-4"
            )}>
                <div 
                    className={clsx(
                        "w-full h-auto",
                        "flex flex-col gap-6"
                    )}
                >
                    <div className={clsx(
                        "flex flex-col h-auto gap-1"
                    )}>
                        <PlainText
                            textClassName={clsx(
                                "relative font-medium break-words",
                                "text-2xl md:text-xl xl:text-2xl text-light"
                            )}
                        >
                            Стоимость асфальтирования
                        </PlainText>
                        <PlainText
                            textClassName={clsx(
                                "relative opacity-40 font-medium",
                                "text-2xl md:text-lg xl:text-xl  text-light"
                            )}
                        >
                            Стоимость определяется индивидуально и зависит от:
                        </PlainText>
                    </div>
                </div>
                <div className={clsx(
                    "flex flex-row gap-2 flex-wrap"
                )}>
                    {tags.map(tag => <Tag>{tag}</Tag>)}
                </div>
                <PlainText
                    textClassName={clsx(
                        "relative h-auto font-medium",
                        "text-light text-primary"
                    )}
                >
                    Мы бесплатно организуем выезд инженера и подготовим подробный расчёт стоимости без скрытых платежей
                </PlainText>
            </div>
            <Link
                // href="#form-container"
                className="no-underline text-inherit"
                onClickCapture={scrollToForm}
            >
                <PointerButton>
                    Получить бесплатную смету
                </PointerButton>
            </Link>
        </div>
    );
}