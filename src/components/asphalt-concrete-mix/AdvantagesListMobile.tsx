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
                text="Собственное производство"
                description="Два современных асфальтобетонных завода позволяют оперативно выполнять как небольшие, так и крупные заказы"
            />
            <AdvantageClause
                // align="right"
                items="left"
                number="02"
                text="Контроль качества"
                description="Каждая партия проходит проверку собственной лабораторией. Продукция соответствует требованиям ГОСТ"
            />
            <AdvantageClause
                // align="left"
                items="left"
                number="03"
                text="Индивидуальный подход"
                description="Производим смесь непосредственно под заявку, что гарантирует сохранение всех технологических характеристик"
            />
            <AdvantageClause
                // align="right"
                items="left"
                number="04"
                text="Высокая производительность"
                description="Производительность одного завода составляет до 1200 тонн за 10 часовую смену, что позволяет обеспечивать бесперебойные поставки даже в высокий сезон"
            />
            <AdvantageClause
                // align="left"
                items="left"
                number="05"
                text="Собственный автопарк"
                description="Организуем доставку непосредственно на строительный объект собственным транспортом"
            />
            <AdvantageClause
                // align="right"
                items="left"
                number="06"
                text="Соблюдение сроков"
                description="Чётко выполняем согласованный график поставок и понимаем, насколько важно не останавливать строительные работы"
            />
            <AdvantageClause
                // align="left"
                items="left"
                number="07"
                text="Более 7 лет опыта"
                description="За годы работы реализованы поставки для множества объектов дорожного строительства и благоустройства"
            />
            <AdvantageClause
                // align="right"
                items="left"
                number="08"
                text="Персональный менеджер"
                description="Каждый заказ сопровождает персональный специалист — от оформления заявки до завершения поставки"
            />
        </div>
    );
}