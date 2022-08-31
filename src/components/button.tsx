import React from "react";
import styled from "styled-components";
import { rem } from "../assets/theme/rem";
import { theme } from "../assets/theme/theme";

interface IProps {
  textBtn: string;
  clickHanfler?: () => void
}

export const Button = ({ textBtn, clickHanfler }: IProps) => {
    return (
        <CustomButton onClick={ () => clickHanfler?.() }>
            { textBtn }
        </CustomButton>
    );
};

const CustomButton = styled.div`
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
  
  &:hover{
    background: ${theme.colors.lightBlue};
  }
  &:active{
    background: ${theme.colors.heavyBlue};
  }
`;
