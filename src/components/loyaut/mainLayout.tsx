import React, { FC } from "react";
import styled from "styled-components";
import { rem } from "../../assets/theme/rem";
import { theme } from "../../assets/theme/theme";
import { Footer } from "../footer/footer";
import { Header } from "../header/header";

type Props = {
  children?: React.ReactNode
};

export const MainLayout: FC<Props> = ({ children }) => {
    return (
        <>
            <Header/>
            <Main>
                <Content>{ children }</Content>
            </Main>
            <Footer/>
        </>
    );
};

const Main = styled.main`
  display: flex;
  justify-content: center;
  height: fit-content;
  min-height: 100%;
  background: ${theme.colors.backgroundDark};
  width: 100%;
;
`;

const Content = styled.div`
  max-width: 1440px;
  height: fit-content;
  width: 100%;
  min-height: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-auto-rows: auto;
  padding: ${rem("40px")} ${rem("25px")} ;
  grid-column-gap: ${rem("32px")};
  
    @media screen and (max-width: ${theme.rubberSize.tablet}) {
      grid-template-columns: 1fr;
      grid-row-gap: ${rem("8px")};
      padding: ${rem("32px")} ${rem("16px")} ;
    }
`;
