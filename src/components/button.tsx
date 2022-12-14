import React from "react";
import styled from "styled-components";
import { rem } from "../assets/theme/rem";
import { theme } from "../assets/theme/theme";

interface IProps {
  textBtn: string;
  clickHanfler?: () => void;
  disabled?: boolean
}

export const Button = ({ textBtn, clickHanfler, disabled }: IProps) => {
    return (
        <CustomButton disabled={ disabled } onClick={ () => clickHanfler?.() }>
            { textBtn }
        </CustomButton>
    );
};

const CustomButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.blue};
  text-transform: uppercase;
  color: ${theme.colors.white};
  border: none;
  font-size: ${rem("16px")};
  font-weight: 700;
  padding: 0 ${rem("23px")};
  white-space: nowrap;
  height: ${rem("60px")};
  border-radius: 6px;
  box-shadow: 0 9px 20px rgb(0 0 0 / 16%);
  transition: all .4s;
  margin-top: ${rem("24px")};
  width: fit-content;
  cursor: pointer;
  margin-top: auto;

 

  &:hover {
    background: ${theme.colors.lightBlue};
  }

  &:active {
    background: ${theme.colors.heavyBlue};
  }

  &:disabled {
    background: #BBC6C8!important;
  }
  @media screen and (max-width: ${theme.rubberSize.desktop}) {
    padding: 0 ${rem("20px")};
    height: ${rem("64px")};
    font-size: ${rem("15px")};
  }
  @media screen and (max-width: ${theme.rubberSize.laptop}) {
    padding: 0 ${rem("16px")};
    height: ${rem("48px")};
    font-size: ${rem("13px")};
  }
`;
