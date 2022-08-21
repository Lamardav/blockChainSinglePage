import React, { FC } from "react";
import { Route, Switch } from "react-router-dom";
import { MainPage } from "../../../pages/mainPage/mainPage";
import { mainRoutes } from "../path/mainRoutes";

export const MainPaths: FC = () => {
    return (
        <Switch>
            <Route exact path={ mainRoutes.faq.link }>
                <div>1</div>
            </Route>
            <Route exact path={ mainRoutes.contacts.link }>
                <div>2</div>

            </Route>
            <Route exact path={ mainRoutes.rules.link }>
                <div>3</div>
            </Route>
            <Route exact path={ mainRoutes.main.link }>
                <MainPage/>
            </Route>
        </Switch>
    );
};
