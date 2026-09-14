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
        text: "Наш парк техники",
        scrollTo: useAnchorMenu("vehicles-container")
    },
    {
        text: "Как оформить аренду",
        scrollTo: useAnchorMenu("delivery-container")
    },
    {
        text: "Условия аренды",
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

export const trustedFacilitySitemap: Array<SitemapLink> = [
    {
        text: "Наш парк техники",
        scrollTo: useAnchorMenu("vehicles-container")
    },
    {
        text: "Как оформить аренду",
        scrollTo: useAnchorMenu("arranging-lease-guide-container")
    },
    {
        text: "Условия аренды",
        scrollTo: useAnchorMenu("leasing-conditions-container")
    },
    {
        text: "FAQ",
        scrollTo: useAnchorMenu("faq-container")
    },
    {
        text: "Оформление заказа",
        scrollTo: useAnchorMenu("form-container")
    },
]