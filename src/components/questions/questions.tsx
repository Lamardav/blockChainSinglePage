import React, { useState } from "react";
import styled, { css } from "styled-components";
import { rem } from "../../assets/theme/rem";
import { theme } from "../../assets/theme/theme";

interface IProps {
  answer: string;
  question: string
}

export const Questions = ({ question, answer }: IProps) => {
    const [opened, setOpened] = useState(false);

    return (
        <Container>
            <Header onClick={ () => setOpened(!opened) }>
                <Question>?</Question>
                { question }
            </Header>
            <Answer opened={ opened }>
                { answer }
            </Answer>
        </Container>
    );
};

const Container = styled.div`
  background: ${theme.colors.white};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  margin-bottom: ${rem("16px")};

  &:nth-last-child(1) {
    margin-bottom: 0;
  }
`;

const Header = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  grid-column-gap: ${rem("16px")};
  padding: ${rem("16px")} ${rem("24px")};
  border-radius: 10px;
  cursor: pointer;
  font-size: ${rem("20px")};
    @media screen and (max-width: ${theme.rubberSize.tablet}) {
      padding: ${rem("12px")} ${rem("20px")};
      font-size: ${rem("17px")};
    }
`;

const Question = styled.div`
  width: ${rem("40")};
  height: ${rem("40px")};
  border-radius: 6px;
  background: #f08585;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.white};
  font-size: ${rem("25px")};
    @media screen and (max-width: ${theme.rubberSize.tablet}) {
      font-size: ${rem("21px")};
      width: ${rem("32")};
      height: ${rem("32px")};
    }
`;

const Answer = styled.div<{ opened?: boolean }>`
  padding: 0;
  visibility: hidden;
  height: 0;
  transition: height 0.3s;
  font-size: ${rem("18px")};
  ${({ opened }) => {
        if (opened) {
            return css`
        visibility: visible;
        height: auto;
        padding: ${rem("16px")} ${rem("24px")};

      `;
        }
    }}
    @media screen and (max-width: ${theme.rubberSize.tablet}) {
  font-size: ${rem("16px")};
}
`;
