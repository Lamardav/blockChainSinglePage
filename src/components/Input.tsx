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
            <CustomInput { ...props }  value={ value }/>
        </InputContainer>
    );
};

const InputContainer = styled.div`
  position: relative;
  width: 100%;
`;

const CustomInput = styled.input`
  width: 100%;
  padding: ${rem("16px")} ${rem("16px")} ${rem("16px")} ${rem("50px")};
  font-size: ${rem("16px")};
  border-radius: ${rem("6px")};
  outline: none;
  border: 1px solid ${theme.colors.black};
`;

const Img = styled.img`
  width: ${rem("18px")};
  height: ${rem("18px")};
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: ${rem("16px")};
`;
