import * as React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Logo from "../../assets/images/common/logo.png";
import { rem } from "../../assets/theme/rem";
import { theme } from "../../assets/theme/theme";
import { NavMenu } from "../../componentsPages/header/navMenu";
import { TelegramLink } from "../../componentsPages/header/telegramLink";
import { navMenuItem } from "../../mockData/navMenuItem";
import { Drawer } from "../drawer/drawer";
import { Hamburger } from "../hamburger/hamburger";

export const Header = () => {
    const history = useHistory();
    const [visibleDrawer, setVisibleDrawer] = useState(false);

    return (
        <Container>
            <Drawer onClose={ () => setVisibleDrawer(false) } opened={ visibleDrawer }>
                { navMenuItem.map((item,i)=> <DrawerItem
                    key={ i }
                    onClick={ ()=> {
                        setVisibleDrawer(false);
                        history.push(item.link);
                    } }
                >{ item.title }
                </DrawerItem>) }
            </Drawer>
            <Content>
                <Hamburger checked={ visibleDrawer } onClick={ () => setVisibleDrawer(!visibleDrawer) }/>
                <ImgLogo onClick={ () => history.push("/") } src={ Logo } alt={ "logo" }/>
                <NavMenu/>
                <TelegramLink/>
            </Content>
        </Container>
    );
};

const Container = styled.header`
  display: flex;
  justify-content: center;
  background: ${theme.colors.backgroundDark};
  box-shadow: 0 4px 14px rgb(0 0 0 / 6%);
  width: 100%;
  padding: 0 ${rem("25px")};
    @media screen and (max-width: ${theme.rubberSize.tablet}) {
      padding: ${rem("4px")} 0;
    }
`;

const Content = styled.div`
  max-width: 1440px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
    @media screen and (max-width: ${theme.rubberSize.tablet}) {
      justify-content: flex-end;

    }
`;

const ImgLogo = styled.img`
  width: ${rem("182px")};
  height: ${rem("95px")};
  @media screen and (max-width: ${theme.rubberSize.desktop}) {
    width: ${rem("132px")};
    height: ${rem("72px")};
  }
  @media screen and (max-width: ${theme.rubberSize.laptop}) {
    width: ${rem("122px")};
    height: ${rem("65px")};
  }
    @media screen and (max-width: ${theme.rubberSize.tablet}) {
      width: ${rem("90px")};
      height: ${rem("50px")}; 
      margin-right: ${rem("32px")};
      }
`;

const DrawerItem = styled.div`
  color: ${theme.colors.black};
  text-transform: uppercase;
  font-size: ${rem("11px")};
  font-weight: 600;
`;
