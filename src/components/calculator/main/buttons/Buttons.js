import React, { useState } from "react";
import { buttonValues } from "../../../../data";
import {
  SelectTipText,
  ButtonsContainer,
  Button,
  ButtonsWrapper,
} from "./ButtonsElements";

export default function Buttons({ getButtonInput, setButtonInput }) {
  let [calc, setCalc] = useState();
  let [activate, setActivate] = useState();
  console.log("calc" + calc);
  let hehe = setButtonInput;
  console.log(hehe);
  const ButtonsMap = buttonValues.map((item) => {
    return (
      <Button
        activated={
          activate === item.id && setButtonInput === false ? true : false
        }
        key={item.id}
        type={item.type}
        defaultValue={item.value}
        placeholder={item.placeholder}
        onClick={() => {
          setCalc((calc = item.value));
          setActivate((activate = item.id));
          getButtonInput(calc);
        }}
        value={
          item.type === "text" &&
          (activate !== item.id || setButtonInput === true)
            ? ""
            : null
        }
        onInput={(e) => {
          setCalc((calc = e.target.value));
          setActivate((activate = item.id));
          getButtonInput(e.target.value);
        }}
      ></Button>
    );
  });
  return (
    <ButtonsWrapper>
      <div>
        <SelectTipText>Select Tip %</SelectTipText>
        <ButtonsContainer>{ButtonsMap}</ButtonsContainer>
      </div>
    </ButtonsWrapper>
  );
}
