import { IRoute } from "../../../api/dto/IRoute";

export type mainRouteType = "notFound" | "main" |   "faq"  |    "contacts"|   "rules"

export const mainRoutes: Record<mainRouteType, IRoute> = {
    notFound: {
        link: "/404",
        title: "404"
    },
    main: {
        link: "/",
        title: "main"
    },
    faq: {
        link: "/faq",
        title: "faq"
    },
    contacts: {
        link: "/contacts",
        title: "contacts"
    },
    rules: {
        link: "/rules",
        title: "rules"
    }
};
