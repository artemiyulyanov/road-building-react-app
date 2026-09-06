import type { SitemapLink } from "@/entities/entities.types";
import { useAnchorMenu } from "./useAnchorMenu";

export const homeSitemap: Array<SitemapLink> = [
    {
        text: "Наши клиенты",
        scrollTo: useAnchorMenu("our-clients-container")
    },
    {
        text: "Чем мы занимаемся",
        scrollTo: useAnchorMenu("collaboration-container")
    },
    {
        text: "Лаборатория",
        scrollTo: useAnchorMenu("laboratory-container")
    },
    {
        text: "Аренда спецтехники",
        scrollTo: useAnchorMenu("rent-equipment-container")
    },
    {
        text: "Асфальтирование под ключ",
        scrollTo: useAnchorMenu("turnkey-asphalting-container")
    },
    {
        text: "Контакты",
        scrollTo: useAnchorMenu("contacts-container")
    }
];

export const asphaltConcreteMixSitemap: Array<SitemapLink> = [
    {
        text: "Ассортимент смесей",
        scrollTo: useAnchorMenu("mixture-list-container")
    },
    {
        text: "Почему именно мы",
        scrollTo: useAnchorMenu("advantages-container")
    },
    {
        text: "Доставка",
        scrollTo: useAnchorMenu("delivery-container")
    },
    {
        text: "Как оформить заказ",
        scrollTo: useAnchorMenu("placing-order-guide-container")
    },
    {
        text: "FAQ",
        scrollTo: useAnchorMenu("faq-container")
    },
    {
        text: "Оформление заказа",
        scrollTo: useAnchorMenu("form-container")
    },
];