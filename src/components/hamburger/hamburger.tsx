import * as React from "react";
import styled, { css } from "styled-components";
import { theme } from "../../assets/theme/theme";

interface IProps {
  checked: boolean;
  onClick?: () => void;
}


export const Hamburger = ({ checked, onClick }: IProps) => {
    return (
        <HamburgerContainer checked={ checked } onClick={ () => onClick?.() }>
            <Line/>
            <Line/>
            <Line/>
        </HamburgerContainer>
    );
};


const HamburgerContainer = styled.div<{ checked: boolean }>`
  height: 26px;
  width: 32px;
  position: absolute;
  display: none;
  top: 17px;
  left: 20px;
  z-index: 2;
  flex-direction: column;
  justify-content: space-between;
  ${({ checked }) => {
        if (checked) {
            return css`
        & > :nth-child(1) {
          transform: rotate(45deg);
        }

        & > :nth-child(2) {
          transform: scaleY(0);
        }

        & > :nth-child(3) {
          transform: rotate(-45deg);
        }
      `;
        }
    }};
  @media screen and (max-width: ${theme.rubberSize.tablet}) {
    display: flex;
  }
`;

const Line = styled.div`
  display: block;
  height: 4px;
  width: 100%;
  border-radius: 10px;
  background: #0e2431;

  &:nth-child(1) {
    transform-origin: 0% 0%;
    transition: transform 0.4s ease-in-out;
  }

  &:nth-child(2) {
    transition: transform 0.2s ease-in-out;
  }

  &:nth-child(3) {
    transform-origin: 0% 100%;
    transition: transform 0.4s ease-in-out;
  }
`;
