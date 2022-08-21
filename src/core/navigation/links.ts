import { mainRouteType, mainRoutes } from "./path/mainRoutes";

export const links = {
    mainRoutes: Object.keys(mainRoutes).map((key) => mainRoutes[key as mainRouteType].link)
};
