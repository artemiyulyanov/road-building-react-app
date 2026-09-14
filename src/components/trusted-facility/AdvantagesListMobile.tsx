import clsx from "clsx";
import { AdvantageClause } from "../AdvantageClause";

export type AdvantagesListMobileProps = React.HTMLProps<HTMLDivElement>

export const AdvantagesListMobile: React.FC<AdvantagesListMobileProps> = ({}) => {
    return (
        <div className={clsx(
            "w-full h-auto",
            "flex md:hidden flex-col gap-8"
        )}>
            <AdvantageClause
                // align="left"
                items="left"
                number="01"
                text="Собственный парк техники"
                description="Вся техника находится в нашей собственности, что позволяет быстро подтверждать заявки и обеспечивать наличие необходимого оборудования"
            />
            <AdvantageClause
                // align="right"
                items="left"
                number="02"
                text="Только опытные операторы"
                description="Каждой единицей техники управляют квалифицированные машинисты с практическим опытом выполнения дорожных работ"
            />
            <AdvantageClause
                // align="left"
                items="left"
                number="03"
                text="Исправная техника"
                description="Регулярное техническое обслуживание минимизирует риск простоев и обеспечивает надёжную работу на объекте"
            />
            <AdvantageClause
                // align="right"
                items="left"
                number="04"
                text="Быстрая подача"
                description="Оперативно доставляем технику на объект в Новосибирске и Новосибирской области"
            />
            <AdvantageClause
                // align="left"
                items="left"
                number="05"
                text="Работа без выходных"
                description="Подстраиваемся под график строительства и готовы работать в выходные дни при необходимости"
            />
            <AdvantageClause
                // align="right"
                items="left"
                number="06"
                text="Полное сопровождение"
                description="Предоставляем сразу несколько единиц техники для выполнения полного комплекса работ"
            />
            <AdvantageClause
                // align="left"
                items="left"
                number="07"
                text="Выгодные условия"
                description="Предлагаем конкурентные цены и индивидуальный подход к каждому проекту"
            />
            <AdvantageClause
                // align="right"
                items="left"
                number="08"
                text="Гарантия бесперебойной работы"
                description="При возникновении технических неисправностей оперативно организуем замену техники"
            />
        </div>
    );
}