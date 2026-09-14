import { AdvantagesList } from "@/components/trusted-facility/AdvantagesList";
import { BigRoadBanner } from "@/icons/BigRoadBanner";
import { LargeLogoIcon } from "@/icons/LargeLogoIcon";
import { PlainText } from "@/ui/PlainText";
import { Tag } from "@/ui/Tag";
import clsx from "clsx";

export type FullAsphaltCycleContainerProps = React.HTMLProps<HTMLDivElement>

const tags: Array<string> = [
    "демонтаж старого покрытия",
    "фрезерование асфальта",
    "вывоз строительного мусора",
    "разработка грунта",
    "устройство песчаного основания",
    "устройство основания из ПГС",
    "устройство щебёночного основания",
    "установка бордюрного камня",
    "проливка битумной эмульсией",
    "укладка асфальтобетонных смесей",
    "уплотнение покрытия дорожными катками",
    "нанесение дорожной разметки",
    "благоустройство территории",
    "выполнение сопутствующих строительных работ",
];

export const FullAsphaltCycleContainer: React.FC<FullAsphaltCycleContainerProps> = ({

}) => {
    return (
        <div 
            className={clsx(
                "w-full h-auto",
                "pl-[20px] pr-[20px] md:pl-[40px] md:pr-[40px]",
                "flex flex-col gap-4"
            )}
            id="full-asphalt-cycle-container"
        >
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
                        Полный комплекс дорожных работ
                    </PlainText>
                    <PlainText
                        textClassName={clsx(
                            "relative opacity-40 font-medium",
                            "text-2xl md:text-lg xl:text-xl  text-light"
                        )}
                    >
                        Мы выполняем весь цикл строительства и ремонта дорожных покрытий. В перечень работ входят
                    </PlainText>
                </div>
            </div>
            <div className={clsx(
                "flex flex-row gap-2 flex-wrap"
            )}>
                {tags.map(tag => <Tag>{tag}</Tag>)}
            </div>
        </div>
    );
}