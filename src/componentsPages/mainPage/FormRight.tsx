import React, { useState } from "react";
import styled from "styled-components";
import email from "../../assets/images/mainPage/email.svg";
import userSvg from "../../assets/images/mainPage/user.svg";
import { rem } from "../../assets/theme/rem";
import { theme } from "../../assets/theme/theme";
import { Button } from "../../components/button";
import { Checkbox } from "../../components/checkbox/checkbox";
import { DropDowninput } from "../../components/dropDownInput/dropDowninput";
import { Input } from "../../components/Input";
import { CtyptoList, PaymentList } from "../../mockData/cryptoList";

export const FormRight = () => {
    const [emailValue, setEmailvalue] = useState("");
    const [cryptoCount, setCryptoCount] = useState("rtrtrtrtrtrtrtrtr");
    const [paymentCount, setPaymentCount] = useState("");
    const [checked, setChecked] = useState(false);
    const [cryptoIndex, setCryptoIndex] = useState(0);
    const [paymentIndex, setpaymentIndex] = useState(0);
    const [wallet, setWallet] = useState("");
    const [user, setUser] = useState("");

    const exchange = "Exchange rate 1 BTC = 22146.02445156 USD";
    const exchangeSmallScreen = "Exchange rate 1 BTC = <br/>22146.02445156 USD";

    return (
        <RightBlock>
            <SecondaryTitle>YOU GIVE</SecondaryTitle>
            <DropDowninput setArrIndex={ (id) => setCryptoIndex(id) } arrIndex={ cryptoIndex } inputName={ "Cruptocurrencies" }
                dataArr={ CtyptoList } value={ cryptoCount }/>

            <Input iconSrc={ email } value={ emailValue } placeholder={ "E-mail" }/>
            <SecondaryTitle>GET</SecondaryTitle>
            <BlueLabel>
                <PDeskrtop>{ exchange }</PDeskrtop>
                <PMobile dangerouslySetInnerHTML={ { __html:exchangeSmallScreen } }/>
            </BlueLabel>

            <DropDowninput setArrIndex={ (id) => setpaymentIndex(id) } arrIndex={ paymentIndex } inputName={ "Stablecoins" }
                dataArr={ PaymentList } value={ paymentCount }/>
            <Input iconSrc={ userSvg } value={ user } placeholder={ "Name of the recipient" }/>
            <Input iconSrc={ `/crypto/${PaymentList[paymentIndex].iconSrc}` } value={ wallet } placeholder={ "Wallet number" }/>
            <Checkbox
                label={ "I agree to the processing of personal data and accept the exchange rules" }
                checked={ checked }
                onChange={ () => setChecked(!checked) }/>
            <Button textBtn={ "MAKE ORDER" }/>
        </RightBlock>
    );
};

const RightBlock = styled.div`
  display: flex;
  grid-column: span 3;
  flex-direction: column;
  width: 100%;
  box-shadow: 0px 0px 6px rgb(0 0 0 / 18%);
  background: ${theme.colors.white};
  padding: ${rem("25px")};
  grid-row-gap: ${rem("24px")};
  @media screen and (max-width: ${theme.rubberSize.desktop}) {
    padding: ${rem("24px")};
    grid-row-gap: ${rem("22px")};
  }
  @media screen and (max-width: ${theme.rubberSize.laptop}) {
    padding: ${rem("16px")};
    grid-row-gap: ${rem("18px")};
  }
    @media screen and (max-width: ${theme.rubberSize.tablet}) {
       margin-top: ${rem("24px")}; 
      }
`;

const SecondaryTitle = styled.h6`
  margin: 0;
  text-transform: uppercase;
  color: ${theme.colors.black};
  font-size: ${rem("22px")};
  font-weight: 700;
  @media screen and (max-width: ${theme.rubberSize.desktop}) {
    font-size: ${rem("21px")};
  }
  @media screen and (max-width: ${theme.rubberSize.laptop}) {
    font-size: ${rem("16px")};
  }
`;

const BlueLabel = styled.h6`
  margin: 0;
  font-weight: 700;
  font-size: ${rem("16px")};
  white-space: pre;
  color: ${theme.colors.blue};
  margin-top: -${rem("14px")};
  @media screen and (max-width: ${theme.rubberSize.desktop}) {
    margin-top: -${rem("13px")};
    font-size: ${rem("14px")};
  }
  @media screen and (max-width: ${theme.rubberSize.laptop}) {
    margin-top: -${rem("8px")};
    font-size: ${rem("12px")};
  }
`;

const PDeskrtop = styled.p`
  margin: 0;
  @media screen and (max-width: ${theme.rubberSize.laptop}) {
    display: none;
  }
  @media screen and (max-width: ${theme.rubberSize.tablet}) {
    display: flex;
  }
`;

const PMobile = styled.p`
  margin: 0;
  display: none;
  @media screen and (max-width: ${theme.rubberSize.laptop}) {
    display: flex;
  }
  @media screen and (max-width: ${theme.rubberSize.tablet}) {
    display: none;
  }
`;
