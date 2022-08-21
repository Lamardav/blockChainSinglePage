import * as React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Logo from "../../assets/images/common/logo.png";
import { rem } from "../../assets/theme/rem";
import { theme } from "../../assets/theme/theme";
import { NavMenu } from "../../componentsPages/header/navMenu";
import { Drawer } from "../drawer/drawer";
import { Hamburger } from "../hamburger/hamburger";

export const Header = () => {
    const history = useHistory();
    const [visibleDrawer, setVisibleDrawer] = useState(false);

    return (
        <Container>
            <Content>
                <Hamburger checked={ visibleDrawer } onClick={ () => setVisibleDrawer(!visibleDrawer) }/>
                <ImgLogo onClick={ () => history.push("/") } src={ Logo } alt={ "logo" }/>
                <NavMenu/>
            </Content>
            <Drawer onClose={ () => setVisibleDrawer(false) } opened={ visibleDrawer }>
                1
            </Drawer>
        </Container>
    );
};

const Container = styled.header`
  display: flex;
  justify-content: center;
  background: ${theme.colors.backgroundDark};
  box-shadow: 0 4px 14px rgb(0 0 0 / 6%);
  width: 100vw;
  padding: 0 ${rem("25px")};
`;

const Content = styled.div`
  max-width: 1440px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const ImgLogo = styled.img`
  width: ${rem("182px")};
  height: ${rem("95px")};
`;
