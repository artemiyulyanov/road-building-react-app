import clsx from "clsx";
import { AdvantageClause } from "./AdvantageClause";

export type AdvantagesListDesktopProps = React.HTMLProps<HTMLDivElement>

export const AdvantagesListDesktop: React.FC<AdvantagesListDesktopProps> = ({}) => {
    return (
        <div className={clsx(
            "w-full h-auto",
            "hidden md:flex flex-row justify-between",
        )}>
            <div className={clsx(
                'flex flex-col justify-between sm:justify-around gap-24 w-1/3 h-full'
            )}>
                <AdvantageClause
                    // align="left"
                    items="left"
                    number="01"
                    text="Собственный парк техники"
                    description="Вся техника находится в нашей собственности, что позволяет быстро подтверждать заявки и обеспечивать наличие необходимого оборудования"
                />
                <AdvantageClause
                    // align="left"
                    items="left"
                    number="03"
                    text="Исправная техника"
                    description="Регулярное техническое обслуживание минимизирует риск простоев и обеспечивает надёжную работу на объекте"
                />
                <AdvantageClause
                    // align="left"
                    items="left"
                    number="05"
                    text="Работа без выходных"
                    description="Подстраиваемся под график строительства и готовы работать в выходные дни при необходимости"
                />
                <AdvantageClause
                    // align="left"
                    items="left"
                    number="07"
                    text="Выгодные условия"
                    description="Предлагаем конкурентные цены и индивидуальный подход к каждому проекту"
                />
            </div>
            <div className={clsx(
                "w-1/3",
                "flex flex-col gap-24 sm:justify-center"
            )}>
                <div className={clsx(
                    "mt-32",
                    "flex flex-col gap-24"
                )}>
                    <AdvantageClause
                        // align="right"
                        items="right"
                        number="02"
                        text="Только опытные операторы"
                        description="Каждой единицей техники управляют квалифицированные машинисты с практическим опытом выполнения дорожных работ"
                    />
                    <AdvantageClause
                        // align="right"
                        items="right"
                        number="04"
                        text="Быстрая подача"
                        description="Оперативно доставляем технику на объект в Новосибирске и Новосибирской области"
                    />
                    <AdvantageClause
                        // align="right"
                        items="right"
                        number="06"
                        text="Полное сопровождение"
                        description="Предоставляем сразу несколько единиц техники для выполнения полного комплекса работ"
                    />
                    <AdvantageClause
                        // align="right"
                        items="right"
                        number="08"
                        text="Гарантия бесперебойной работы"
                        description="При возникновении технических неисправностей оперативно организуем замену техники"
                    />
                </div>
            </div>
        </div>
    );
}