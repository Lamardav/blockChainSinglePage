import React from "react";
import "./assets/theme/remcalc";
import { BrowserRouter } from "react-router-dom";
import { MainRoutes } from "./core/navigation/mainRoutes";

export const  App = ()=> {
    return (
        <>
            <BrowserRouter>
                <MainRoutes/>
            </BrowserRouter>
        </>
    );
};

