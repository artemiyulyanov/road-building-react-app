import type { Service } from "@/entities/service";
import clsx from "clsx";
import { ServiceCard } from "./ServiceCard";

import roller_service_card from "@/assets/roller-service-card.png";
import loader_service_card from "@/assets/loader-service-card.png";
import zil_service_card from "@/assets/zil-service-card.png";
import paver_service_card from "@/assets/paver-service-card.png";
import cutter_service_card from "@/assets/cutter-service-card.png";
import compressor_service_card from "@/assets/compressor-service-card.png";

export type ServicesListProps = React.HTMLProps<HTMLDivElement> & {

}

const services: Array<Service> = [
    {
        title: "Аренда катков",
        description: "В наличии CAT, BOMAG, HITACHI и другие",
        iconPath: roller_service_card
    },
    {
        title: "Аренда погрузчика",
        description: "Мини-погрузчики, экскаваторы-погрузчики, погрузчики фронтальные",
        iconPath: loader_service_card
    },
    {
        title: "Аренда ЗИЛ водовоза",
        description: "Водовозка 6м3+ щетка",
        iconPath: zil_service_card
    },
    {
        title: "Аренда асфальтоукладчиков",
        description: "В наличии асфальтоукладчики Volvo",
        iconPath: paver_service_card
    },
    {
        title: "Аренда фрезы",
        description: "В наличии марки WIRTGEN и SUNY",
        iconPath: cutter_service_card
    },
    {
        title: "Airman компрессор",
        description: "В наличии Airman PDS185",
        iconPath: compressor_service_card
    },
];

export const ServicesList: React.FC<ServicesListProps> = ({

}) => {
    return (
        <div className={clsx(
            "w-full h-auto ",
            "flex flex-col gap-2"
        )}>
            {services.map(service => 
                <ServiceCard
                    service={service}
                />
            )}
        </div>
    );
}