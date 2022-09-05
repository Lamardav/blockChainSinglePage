import React, { FC, useEffect } from "react";
import styled from "styled-components";
import { rem } from "../../assets/theme/rem";
import { theme } from "../../assets/theme/theme";

interface IProps {
  clickClose?: () => void;
  visible: boolean;
  children?: React.ReactNode
}

export const Modal: FC<IProps> = (props) => {
    useEffect(() => {
        props.visible && document.body.setAttribute("style", "overflow: hidden; touch-action: none");
        return () => document.body.setAttribute("style", "");
    }, [props.visible]);

    return (
        <Container visible={ props.visible }>
            <Content onClick={ () => {
                props.clickClose?.();
            }

            }>
                { props.children }
            </Content>

            <BlackWrapper onClick={ props.clickClose }/>
        </Container>
    );
};

const Container = styled.div<{ visible: boolean }>`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100vw;
  height: 100%;
  z-index: 125;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  display: ${({ visible }) => (visible ? "flex" : "none")};
`;

const BlackWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: ${theme.colors.mortar};
  opacity: 0.8;
  z-index: 99;
`;

const Content = styled.div`
  display: flex;
  width: fit-content;
  z-index: 140;
  overflow: auto;
  height: fit-content;
  max-height: 100%;
  padding: ${rem("60px")} 0;
  @media screen and (max-width: ${theme.rubberSize.laptop}) {
    padding: ${rem("80px")} 0;
  }
`;
