import * as React from "react";
import { FC, memo } from "react";
import { Route, RouteProps } from "react-router-dom";

interface IProps extends RouteProps {
  Component: JSX.Element;
}

export const AppRoute: FC<IProps> = memo(
    ({ Component,  ...rest }) => {
        return (
            <Route { ...rest } >
                { Component }
            </Route>
        );
    }
);
