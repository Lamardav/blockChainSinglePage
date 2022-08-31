import React from "react";
import styled from "styled-components";
import { rem } from "../assets/theme/rem";
import { theme } from "../assets/theme/theme";

interface IProps {
  iconSrc: string;
  value: string;
  placeholder?: string
}

export const Input = ({ iconSrc, value, ...props }: IProps) => {
    return (
        <InputContainer>
            <Img src={ iconSrc } alt={ "iconInput" }/>
            <CustomInput { ...props } value={ value }/>
        </InputContainer>
    );
};

const InputContainer = styled.div`
  position: relative;
  width: 100%;
`;

const CustomInput = styled.input`
  width: 100%;
  padding: ${rem("18px")} ${rem("18px")} ${rem("18px")} ${rem("54px")};
  font-size: ${rem("18px")};
  border-radius: ${rem("6px")};
  outline: none;
  border: 1px solid ${theme.colors.black};
  @media screen and (max-width: ${theme.rubberSize.desktop}) {
    padding: ${rem("16px")} ${rem("16px")} ${rem("16px")} ${rem("52px")};
    font-size: ${rem("16px")};
  };
  @media screen and (max-width: ${theme.rubberSize.laptop}) {
    padding: ${rem("13px")} ${rem("13px")} ${rem("13px")} ${rem("43px")};
    font-size: ${rem("13px")};
  };
`;

const Img = styled.img`
  width: ${rem("24px")};
  height: ${rem("24px")};
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: ${rem("16px")};
  @media screen and (max-width: ${theme.rubberSize.desktop}) {
    width: ${rem("22px")};
    height: ${rem("22px")};
  }
    @media screen and (max-width: ${theme.rubberSize.laptop}) {
      width: ${rem("18px")};
      height: ${rem("18px")};
      left: ${rem("12px")};
    }
`;
