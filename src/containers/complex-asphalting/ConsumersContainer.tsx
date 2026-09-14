import { AdvantagesList } from "@/components/trusted-facility/AdvantagesList";
import { BigRoadBanner } from "@/icons/BigRoadBanner";
import { HumanIcon } from "@/icons/HumanIcon";
import { LargeLogoIcon } from "@/icons/LargeLogoIcon";
import { useAnchorMenu } from "@/shared/useAnchorMenu";
import { PlainText } from "@/ui/PlainText";
import { PointerButton } from "@/ui/PointerButton";
import { Tag } from "@/ui/Tag";
import { Link } from "@heroui/react";
import clsx from "clsx";

export type ConsumersContainerProps = React.HTMLProps<HTMLDivElement>

const tags: Array<string> = [
    "строительные компании",
    "промышленные предприятия",
    "логистические комплексы",
    "девелоперы",
    "торговые сети",
    "управляющие компании",
    "государственные учреждения",
    "муниципальные заказчики",
    "частные клиенты"
];

export const ConsumersContainer: React.FC<ConsumersContainerProps> = ({

}) => {
    const scrollToForm = useAnchorMenu('form-container');

    return (
        <div 
            className={clsx(
                "w-full h-auto",
                "pl-[20px] pr-[20px] md:pl-[40px] md:pr-[40px]",
                "flex flex-col gap-6"
            )}
            id="consumers-container"
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
                        "flex flex-col h-auto gap-4"
                    )}>
                        <HumanIcon
                            contentClassName={clsx(
                                "relative h-8 lg:h-10"
                            )}
                        />
                        <PlainText
                            textClassName={clsx(
                                "relative font-medium break-words",
                                "text-2xl md:text-xl xl:text-2xl text-light"
                            )}
                        >
                            Для кого мы работаем
                        </PlainText>
                    </div>
                </div>
                <div className={clsx(
                    "flex flex-row gap-2 flex-wrap"
                )}>
                    {tags.map(tag => <Tag>{tag}</Tag>)}
                </div>
            </div>
        </div>
    );
}