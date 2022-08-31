import React, { useState } from "react";
import styled from "styled-components";
import { rem } from "../../assets/theme/rem";
import { theme } from "../../assets/theme/theme";
import { ICtypto, IPayment } from "../../mockData/cryptoList";

interface IProps {
  value: string;
  placeholder?: string;
  dataArr: ICtypto[] | IPayment[];
  onClick?: () => void
}


export const DropDowninput = ({ value, dataArr, ...props }: IProps) => {
    const [opened, setOpened] = useState(true);

    return (
        <InputContainer>
            <LeftInput>
                <Img src={ `/crypto/${dataArr[0].iconSrc}` }/>
                <Name>{ dataArr[0].name }</Name>
            </LeftInput>

          
            <RightInput>
                { /*<Img src={ iconSrc } alt={ "iconInput" }/>*/ }
                <CustomInput { ...props } value={ value }/>
                <SmallLabel>{ dataArr[0].shortName }</SmallLabel>
            </RightInput>
            <DropDown>
            
            </DropDown>
        </InputContainer>
    );
};


const InputContainer = styled.div`
  display: flex;
  position: relative;
  width: 100%;
`;

const LeftInput = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
  align-items: center;
  text-align: center;
  padding-left: ${rem("52px")};
  background: ${theme.colors.white};
  border-bottom-left-radius: ${rem("6px")};
  grid-column-gap: ${rem("12px")};
  border-top-left-radius: ${rem("6px")};
  border-bottom: 1px solid ${theme.colors.black};
  border-top: 1px solid ${theme.colors.black};
  border-left: 1px solid ${theme.colors.black};
}

;
`;

const RightInput = styled.div`
  position: relative;
  width: 100%;
`;

const CustomInput = styled.input`
  width: 100%;
  padding: ${rem("16px")} ${rem("88px")} ${rem("16px")} ${rem("16px")};
  font-size: ${rem("16px")};
  border-bottom-right-radius: ${rem("6px")};
  border-top-right-radius: ${rem("6px")};
  outline: none;
  border: 1px solid ${theme.colors.black};
`;

const SmallLabel = styled.p`
  margin: 0;
  font-size: ${rem("20")};
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: ${rem("16px")};
`;


const Img = styled.img`
  width: ${rem("24px")};
  height: ${rem("24px")};
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: ${rem("16px")};
`;

const Name = styled.p`
  margin: 0;
  width: 100%;
`;


const DropDown = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: ${theme.colors.white};
  padding: ${rem("10px")} ${rem("16px")};
`;

const SmallTitle = styled.p`
margin: 0;
`;
