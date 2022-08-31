import React, { useState } from "react";
import styled from "styled-components";
import email from "../../assets/images/mainPage/email.svg";
import { DropDowninput } from "../../components/dropDownInput/dropDowninput";
import { Input } from "../../components/Input";
import { CtyptoList } from "../../mockData/cryptoList";

export const FormRight = () => {
    const [emailValue, setEmailvalue] = useState("");
    const [checked,setChecked]=useState(false);
    const [cryptoCount,setCryptoCount] = useState("ytyrtytyreeryreyery");

    return (
        <RightBlock>
            <Input iconSrc={ email } value={ emailValue } placeholder={ "E-mail" }/>
            { /*<Button textBtn={ "MAKE ORDER" }/>*/ }
            { /*<Checkbox checked={ checked } onChange={ ()=>setChecked(!checked) }/>*/ }
            <DropDowninput  dataArr={ CtyptoList } value={ cryptoCount }/>
        </RightBlock>
    );
};

const RightBlock = styled.div`
  display: flex;
  grid-column: span 3;
  flex-direction: column;
  width: 100%;
`;
