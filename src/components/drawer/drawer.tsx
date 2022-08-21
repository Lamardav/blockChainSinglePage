import React, { FC, useEffect } from "react";
import styled, { css } from "styled-components";
import { rem } from "../../assets/theme/rem";
import { theme } from "../../assets/theme/theme";

interface IProps {
  onClose: () => void;
  opened: boolean;
  title?: string;
  children?: React.ReactNode
}

export const Drawer: FC<IProps> = ({ onClose, opened, children }) => {
    const onKeydown = ({ key }: KeyboardEvent) => {
        key === "Escape" && opened && onClose();
    };
    useEffect(() => {
        document.addEventListener("keydown", onKeydown);
        return () => document.removeEventListener("keydown", onKeydown);
    });
    
    useEffect(() => document.body.style.setProperty("overflow", opened ? "hidden" : "initial"), [opened]);
    useEffect(() => {
        return () => onClose();
    }, [onClose]);

    return (
        <>
            <DrawerBlackWrapper onClick={ onClose } aria-hidden="true" open={ opened }/>
            <DrawerContainer open={ opened }>
                <Content>{ children }</Content>
            </DrawerContainer>
        </>
    );
};

const DrawerBlackWrapper = styled.div<{ open: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  background: rgba(29, 38, 51, 0.5);
  transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  display: none;
  z-index: 100;
  
  ${({ open }) => {
        if (open) {
            return css`
        opacity: 1;
        z-index: 999;
        visibility: visible;
      `;
        } else {
            return css`
        opacity: 0;
        z-index: -1;
        visibility: hidden;
        transition: 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
      `;
        }
    }};
  
  @media screen and (max-width: ${theme.rubberSize.tablet}) {
  display: block;
}
`;
const DrawerContainer = styled.div<{ open: boolean }>`
  font-family: FCSM-Normal, sans-serif;
  top: 0;
  right: 0;
  flex: 1 0 auto;
  height: 100%;
  display: none;
  outline: 0;
  z-index: 1200;
  position: fixed;
  overflow-y: auto;
  flex-direction: column;
  background-color: ${theme.colors.backgroundDark};
  width: ${rem("367px")};
  flex-shrink: 0;
  ${({ open }) => {
        if (open) {
            return css`
        visibility: visible;
        transform: none;
      `;
        } else {
            return css`
        visibility: hidden;
        width: 240px;
        transform: translateX(240px);
        flex-shrink: 0;
        transition: 325ms cubic-bezier(0, 0, 0.2, 1) 0ms;
      `;
        }
    }}
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
  transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  @media screen and (max-width: ${theme.rubberSize.tablet}) {
    width: 100vw;
    display: flex;
  }
`;


const Content = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;
