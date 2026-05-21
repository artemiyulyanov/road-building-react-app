import { useEffect } from "react"

export const useAnchorMenu = (id: string) => {
    const offset = 200;

    const srcollTo = () => {
        const element = document.getElementById(id);
        if (!element) return;

        const y =
            element.getBoundingClientRect().top +
            window.pageYOffset -
            offset;

        window.scrollTo({
            top: y,
            behavior: "smooth",
        })
    }

    return srcollTo;
}