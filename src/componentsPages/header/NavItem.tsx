import * as React from "react";
import { useMemo } from "react";
import { useHistory, useLocation } from "react-router-dom";
import styled from "styled-components";
import { IRoute } from "../../api/dto/IRoute";
import { rem } from "../../assets/theme/rem";
import { theme } from "../../assets/theme/theme";

interface IProps {
  item: IRoute;
}


export const NavItem = ({ item }: IProps) => {
    const history = useHistory();
    const { pathname }  =  useLocation();
    const active=useMemo(()=> pathname.includes(item.link),[item.link, pathname]);

    return  ( <MenuItem onClick={ ()=> history.push(item.link) } isActive={ active }>{ item.title }</MenuItem>);
};

const MenuItem = styled.p<{ isActive: boolean }>`
  margin: 0;
  width: fit-content;
  font-size: ${rem("16px")};
  color: ${theme.colors.black};
  padding: ${rem("6px")};
  cursor: pointer;
  text-transform: uppercase;
  color: ${theme.colors.black};
  border-radius: 8px;
  &:hover{
    background: ${theme.colors.blue};
  }
`;

