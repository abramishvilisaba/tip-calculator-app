import React from "react";
import { BodyContainer, CalcWrapper } from "./CalculatorElements";
import Main from "./main/Main";

function Calculator() {
  return (
    <BodyContainer>
      <CalcWrapper>
        <Main />
      </CalcWrapper>
    </BodyContainer>
  );
}

export default Calculator;
