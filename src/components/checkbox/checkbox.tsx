import React from "react";
import styled from "styled-components";
import { rem } from "../../assets/theme/rem";
import { theme } from "../../assets/theme/theme";


export interface ICheckboxProps
  extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  styles?: { [key: string]: string };
  label?: string;
  errorText?: string;
}


export const Checkbox = ({ checked = false, errorText, label, ...props }: ICheckboxProps) => {
    return (
        <Wrapper>
            <Container>
                <CheckBoxBlock checked={ checked }>
                    <input { ...props } type="checkbox"/>

                    <svg viewBox="0 0 20 20" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        { checked ? (
                            <path
                                strokeWidth="0"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M3 1C1.89543 1 1 1.89543 1 3V17C1 18.1046 1.89543 19 3 19H17C18.1046 19 19 18.1046 19 17V3C19 1.89543 18.1046 1 17 1H3ZM15.7788 6.62721C16.1252 6.19706 16.0574 5.56755 15.6272 5.22115C15.1971 4.87475 14.5675 4.94264 14.2212 5.37279L8.48965 12.49L5.7194 9.62081C5.33578 9.2235 4.70271 9.21239 4.3054 9.59601C3.90809 9.97963 3.89699 10.6127 4.2806 11.01L7.83817 14.6946C8.03748 14.901 8.31585 15.0119 8.6025 14.999C8.88915 14.9861 9.15645 14.8507 9.33642 14.6272L15.7788 6.62721Z"
                            />
                        ) : (
                            <rect x="1" y="1" width="18px" height="18px" rx="1" strokeWidth="1"/>
                        ) }
                    </svg>

                </CheckBoxBlock>
                { label ? <Label>{ label }</Label> : null }

            </Container> 
        </Wrapper>
    );
};


const Wrapper = styled.div`
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  grid-column-gap: ${rem("10px")};
    @media screen and (max-width: ${theme.rubberSize.laptop}) {
      grid-column-gap: ${rem("8px")};
      align-items: baseline;
    }
`;

const CheckBoxBlock = styled.label<{ checked?: boolean }>`
  display: flex;
  align-items: flex-start;
  flex-direction: row-reverse;
  cursor: pointer;
  & path {
    fill: ${theme.colors.blue};
  }
  &:hover path {
    fill: ${theme.colors.heavyBlue};
  }
  &:hover rect {
    stroke: ${theme.colors.heavyBlue};
  }
  &:active path {
    fill: ${theme.colors.lightBlue};
  }
  &:active rect {
    stroke: ${theme.colors.lightBlue};
  }
  &:disabled path {
    fill: ${theme.colors.heavyBlue};
  }
  &:disabled rect {
    stroke: ${theme.colors.heavyBlue};
  }
  & > input {
    visibility: hidden;
    width: 0;
    margin: 0;
  }
  & > svg {
    flex-shrink: 0;
    width: ${rem("20px")};
    height: ${rem("20px")};
    fill: ${({ checked }) => (checked ? theme.colors.blue : "transparent")};
    stroke: ${({ checked }) => (!checked ? theme.colors.heavyBlue : theme.colors.blue)};
      @media screen and (max-width: ${theme.rubberSize.laptop}) {
        width: ${rem("15px")};
        height: ${rem("15px")};
        }
  }
`;

const Label = styled.span`
  margin: 0;
  font-size: ${rem("14px")};
  line-height: ${rem("20px")};
    @media screen and (max-width: ${theme.rubberSize.desktop}) {
      font-size: ${rem("13px")};
      line-height: ${rem("18px")};
      }
    @media screen and (max-width: ${theme.rubberSize.laptop}) {
      font-size: ${rem("12px")};
      line-height: ${rem("16px")}; 
      }
`;
