import React from "react";
import styled from "styled-components";
import close from "../../assets/icons/close.svg";
import { rem } from "../../assets/theme/rem";
import { theme } from "../../assets/theme/theme";

interface IProps {
  onClose?: () => void
}


export const SuccessClick = ({ onClose }: IProps) => {
    return (
        <Container onClick={ (e)=>{e.stopPropagation();} }>
            <Header>
                <CloseIcon onClick={ ()=> onClose?.()  } src={ close } alt={ "close" }/>
            </Header>
            Вы успешно создали запрос
        </Container>
    );
};

const Container = styled.div`
  width: fit-content;
  height: fit-content;
  background: ${theme.colors.white};
  padding: ${rem("24px")} ${rem("24px")} ${rem("32px")};
  z-index: 99999999;
  border-radius: ${rem("8px")};
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Header = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
  margin-bottom: ${rem("24px")};
`;

const CloseIcon = styled.img`
  width: ${rem("24")};
  height: ${rem("24px")};
  margin-left: auto;
  cursor: pointer;
`;
