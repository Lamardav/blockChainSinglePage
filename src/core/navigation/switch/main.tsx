import React, { FC } from "react";
import { Route, Switch } from "react-router-dom";
import { Contacts } from "../../../pages/contacts/contacts";
import { Faq } from "../../../pages/faq/faq";
import { MainPage } from "../../../pages/mainPage/mainPage";
import { Rules } from "../../../pages/rules/rules";
import { mainRoutes } from "../path/mainRoutes";

export const MainPaths: FC = () => {
    return (
        <Switch>
            <Route exact path={ mainRoutes.faq.link }>
                <Faq/>
            </Route>
            <Route exact path={ mainRoutes.contacts.link }>
                <Contacts/>
            </Route>
            <Route exact path={ mainRoutes.rules.link }>
                <Rules/>
            </Route>
            <Route exact path={ mainRoutes.main.link }>
                <MainPage/>
            </Route>
        </Switch>
    );
};
