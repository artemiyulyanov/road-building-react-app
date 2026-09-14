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
                text="Полный цикл без посредников"
                description="Мы самостоятельно производим и доставляем асфальтобетонные смеси, предоставляем спецтехнику и осуществляем все строительные работы собственными силами"
            />
            <AdvantageClause
                // align="right"
                items="left"
                number="02"
                text="Собственное производство"
                description="Современные асфальтобетонные заводы позволяют выпускать качественные смеси в необходимых объёмах"
            />
            <AdvantageClause
                // align="left"
                items="left"
                number="03"
                text="Собственный парк техники"
                description="В нашем распоряжении асфальтоукладчики, катки, автогрейдеры, экскаваторы, самосвалы и другая специализированная техника"
            />
            <AdvantageClause
                // align="right"
                items="left"
                number="04"
                text="Собственные дорожные бригады"
                description="Все работы выполняют опытные специалисты ООО «ТДС», что обеспечивает единые стандарты качества и высокий уровень ответственности на каждом этапе"
            />
            <AdvantageClause
                // align="left"
                items="left"
                number="05"
                text="Лабораторный контроль качества"
                description="Каждая партия асфальтобетонной смеси проходит проверку собственной лабораторией, а выполнение работ контролируется на всех этапах производства"
            />
            <AdvantageClause
                // align="right"
                items="left"
                number="06"
                text="Работа по ГОСТ и СНиП"
                description="Строго соблюдаем действующие нормативы и технологические требования при строительстве и ремонте дорожных покрытий"
            />
            <AdvantageClause
                // align="left"
                items="left"
                number="07"
                text="Прозрачные условия"
                description="Работаем по официальному договору с фиксированной сметой. Стоимость не меняется без согласования с заказчиком"
            />
            <AdvantageClause
                // align="right"
                items="left"
                number="08"
                text="Контроль каждого этапа"
                description="Предоставляем фотоотчёты о ходе выполнения работ и обеспечиваем постоянное взаимодействие с заказчиком"
            />
        </div>
    );
}