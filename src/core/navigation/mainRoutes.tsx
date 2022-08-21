import React, { FC, useMemo } from "react";
import { Redirect, Switch } from "react-router-dom";
import { AppRoute } from "./appRoute";
import { links } from "./links";
import { MainPaths } from "./switch/main";
import { MainLayout } from "../../components/loyaut/mainLayout";

export const MainRoutes = () => {
    const Layout = useMemo(() => getLayout(), []);

    return (
        <Layout>
            <Switch>

                <AppRoute
                    Component={ <MainPaths/> }
                    path={ links.mainRoutes }
                    exact
                />
                <Redirect to={ "/" }/>
            </Switch>
        </Layout>
    );
};


const getLayout = (): FC<{children?: React.ReactNode}> => {
    return MainLayout;
};
