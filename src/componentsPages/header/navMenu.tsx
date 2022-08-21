import * as React from "react";
import styled from "styled-components";
import { NavItem } from "./NavItem";
import { rem } from "../../assets/theme/rem";
import { navMenuItem } from "../../mockData/navMenuItem";

export const NavMenu = () => {

    return (
        <Container>
            { navMenuItem.map((item,i)=> <NavItem key={ i }  item={ item }  />) }
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    grid-column-gap: ${rem("56px")};
    height: ${rem("125px")};
`;

