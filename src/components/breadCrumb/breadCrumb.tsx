import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import arrow from "../../assets/images/common/rightArrow.svg";
import { rem } from "../../assets/theme/rem";
import { theme } from "../../assets/theme/theme";

interface IProps {
  linkName: string;
}


export const BreadCrumb = ({ linkName }: IProps) => {
    const history = useHistory();

    return (
        <Container>
            <Home onClick={ () => history.push("/") }>
                Home
            </Home>
      &nbsp;{ <Img src={ arrow } alt={ "arrow" }/> }&nbsp;
            <Guest>
                { linkName }
            </Guest>
        </Container>
    );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding-bottom: ${rem("12px")};
  border-bottom: 1px solid #eeeeee;
  grid-column: span 6;
`;


const Home = styled.p`
  margin: 0;
  font-size: ${rem("16")};
  color: ${theme.colors.mortar};
  cursor: pointer;
    @media screen and (max-width: ${theme.rubberSize.laptop}) {
      font-size: ${rem("14")};
    }
`;

const Guest = styled(Home)`
  color: ${theme.colors.black};
`;

const Img = styled.img`
  width: ${rem("8")};
  height: ${rem("8")};
  cursor: default;
    @media screen and (max-width: ${theme.rubberSize.laptop}) {
      width: ${rem("8")};
      height: ${rem("8")}; 
      }
`;
