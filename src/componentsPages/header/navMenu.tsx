import * as React from "react";
import styled from "styled-components";
import { NavItem } from "./NavItem";
import { rem } from "../../assets/theme/rem";
import { theme } from "../../assets/theme/theme";
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
    justify-self: flex-end;
    margin-left: auto;
    
      @media screen and (max-width: ${theme.rubberSize.desktop}) {
          height: ${rem("95px")};
      }
      @media screen and (max-width: ${theme.rubberSize.laptop}) {
          height: ${rem("80px")};
      }
      @media screen and (max-width: ${theme.rubberSize.tablet}) {
          display: none;
      }
`;

