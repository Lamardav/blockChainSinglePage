import React, { useState } from "react";
import styled, { css } from "styled-components";
import { rem } from "../../assets/theme/rem";
import { theme } from "../../assets/theme/theme";
import { ICtypto, IPayment } from "../../mockData/cryptoList";

interface IProps {
  value: string;
  placeholder?: string;
  dataArr: ICtypto[] | IPayment[];
  onClick?: () => void;
  inputName: string;
  arrIndex: number;
  setArrIndex?: (id: number) => void
}


export const DropDowninput = ({ value, dataArr, inputName, arrIndex, setArrIndex, ...props }: IProps) => {
    const [opened, setOpened] = useState(false);
    const handleClick = (id: number) => {
        setOpened(false);
        setArrIndex?.(id);
    };

    return (
        <InputContainer opened={ opened } onBlur={ () => setOpened(false) }>
            <LeftInput onClick={ () => setOpened(!opened) }>
                <Img src={ `/crypto/${dataArr[arrIndex].iconSrc}` }/>
                <Name>{ dataArr[arrIndex].name }</Name>
            </LeftInput>

            <RightInput>
                <CustomInput { ...props } value={ value }/>
                <SmallLabel>{ dataArr[arrIndex].shortName }</SmallLabel>
            </RightInput>
            <DropDown visible={ opened }>
                <SmallTitle>{ inputName }</SmallTitle>
                <ListContainer>
                    { dataArr.map((item, i) => {
                        return (
                            <ArrItem onClick={ () => handleClick(i) } key={ i }>
                                <SmallImg src={ `/crypto/${item.iconSrc}` } alt={ item.iconSrc }/>
                                { item.name }
                            </ArrItem>
                        );
                    }) }
                </ListContainer>
            </DropDown>
        </InputContainer>
    );
};


const InputContainer = styled.div<{ opened: boolean }>`
  display: flex;
  position: relative;
  width: 100%;
  ${({ opened }) => {
        if (opened) {
            return css`
        & > :nth-child(1) {
          border-bottom: none;
          border-bottom-left-radius: 0;
        }

        & > :nth-child(2) input {
          border-bottom-right-radius: 0;
        }
      `;
        }
    }}
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

@media screen and (max-width: ${theme.rubberSize.laptop}) {
  padding-left: ${rem("6px")};
  grid-column-gap: ${rem("12px")};
  text-align: left;
}

;
`;

const RightInput = styled.div`
  position: relative;
  width: 100%;
`;

const CustomInput = styled.input`
  width: 100%;
  padding: ${rem("18px")} ${rem("90px")} ${rem("18px")} ${rem("18px")};
  font-size: ${rem("18px")};
  border-bottom-right-radius: ${rem("6px")};
  border-top-right-radius: ${rem("6px")};
  outline: none;
  border: 1px solid ${theme.colors.black};
  @media screen and (max-width: ${theme.rubberSize.desktop}) {
    font-size: ${rem("16px")};
    padding: ${rem("16px")} ${rem("86px")} ${rem("16px")} ${rem("16px")};
  }
  @media screen and (max-width: ${theme.rubberSize.laptop}) {
    padding: ${rem("13px")} ${rem("50px")} ${rem("13px")} ${rem("13px")};
    font-size: ${rem("13px")};
  }
`;

const SmallLabel = styled.p`
  margin: 0;
  font-size: ${rem("20")};
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: ${rem("16px")};
  @media screen and (max-width: ${theme.rubberSize.laptop}) {
    font-size: ${rem("11")};
    right: ${rem("10px")};
  }
`;


const Img = styled.img`
  width: ${rem("24px")};
  height: ${rem("24px")};
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: ${rem("16px")};
  @media screen and (max-width: ${theme.rubberSize.laptop}) {
    width: ${rem("16px")};
    height: ${rem("16px")};
    left: ${rem("10px")};

  }
`;

const Name = styled.p`
  margin: 0;
  width: 100%;
  @media screen and (max-width: ${theme.rubberSize.laptop}) {
    font-size: ${rem("12px")};
    word-break: break-word;
    padding-left: ${rem("28px")};
    justify-self: flex-start;
    margin-right: auto;
  }
`;


const DropDown = styled.div<{ visible: boolean }>`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: ${theme.colors.white};
  padding: ${rem("10px")} ${rem("16px")};
  visibility: ${({ visible }) => !visible && "hidden"};
  height: ${({ visible }) => !visible ? 0 : "auto"};
  border: 1px solid ${theme.colors.black};
  border-top: none;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  transition: height 0.3s;
  z-index: 12;
`;

const SmallTitle = styled.p`
  margin: 0;
  color: ${theme.colors.darkgray};
  font-size: ${rem("14px")};
  width: 100%;
  border-bottom: 1px solid ${theme.colors.darkgray};
  padding-bottom: ${rem("1px")};
  margin-bottom: ${rem("8px")};
  @media screen and (max-width: ${theme.rubberSize.desktop}) {
    padding-bottom: ${rem("3px")};
  }
`;

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: ${rem("16px")};
  grid-row-gap: ${rem("5px")};
  padding: ${rem("8px")} 0 0;
  @media screen and (max-width: ${theme.rubberSize.laptop}) {
    grid-template-columns: repeat(2, 1fr);

  }
`;


const ArrItem = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-column-gap: ${rem("12px")};
  align-items: center;
  font-size: ${rem("16px")};
  color: ${theme.colors.mortar};
  padding: ${rem("12px")} ${rem("8px")};
  transition: background-color 0.3s;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: ${theme.colors.darlBlue};
  }

  @media screen and (max-width: ${theme.rubberSize.desktop}) {
    padding: ${rem("11px")} ${rem("7px")};
    grid-column-gap: ${rem("11px")};
    font-size: ${rem("13px")};
  }
  @media screen and (max-width: ${theme.rubberSize.laptop}) {
    padding: ${rem("8px")} ${rem("4px")};
    grid-column-gap: ${rem("8px")};
    font-size: ${rem("10px")};
    padding: ${rem("8px")} ${rem("2px")};
  }
`;

const SmallImg = styled.img`
  width: ${rem("24px")};
  height: ${rem("24px")};
  @media screen and (max-width: ${theme.rubberSize.desktop}) {
    width: ${rem("20px")};
    height: ${rem("20px")};
  }
  @media screen and (max-width: ${theme.rubberSize.laptop}) {
    width: ${rem("16px")};
    height: ${rem("16px")};
  }
`;
