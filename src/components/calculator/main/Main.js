import React, { useState } from "react";
import BillLogo from "../../../images/icon-dollar.svg";
import PeopleLogo from "../../../images/icon-person.svg";
import { InputBillValues, NumberOfPeopleValues } from "../../../data";
import Buttons from "./buttons/Buttons";
import TextInput from "./textInput/TextInput";
import Info from "../info/Info.js";
import { InputCalculatorWrapper, InfoCalculatorWrapper } from "./MainElements";

function Inputs(props) {
  const [billValue, setBillValue] = useState();
  const getBillInput = (e) => {
    setBillValue(parseInt(e.target.value));
  };
  const [peopleValue, setPeopleValue] = useState();
  const getPeopleInput = (e) => {
    setPeopleValue(parseInt(e.target.value));
  };
  const [buttonValue, setButtonValue] = useState();
  const getButtonInput = (calc) => {
    setButtonReset(false);
    setButtonValue(parseInt(calc));
  };
  const [buttonReset, setButtonReset] = useState(false);

  const TotalBill = (billValue + (buttonValue / 100) * billValue) / peopleValue;
  let TipAmount = 0;
  let Bill = 0;
  let BillTipFilled = false;

  Number.isInteger(parseInt(billValue)) &&
  Number.isInteger(parseInt(buttonValue)) &&
  !Number.isInteger(parseInt(peopleValue))
    ? (BillTipFilled = true)
    : (BillTipFilled = false);
  console.log("AAAAAAAAAA " + BillTipFilled);

  Number.isInteger(parseInt(TotalBill))
    ? (Bill = TotalBill.toFixed(2))
    : (Bill = 0);
  Number.isInteger(parseInt(TotalBill))
    ? (TipAmount = ((buttonValue / 100) * billValue).toFixed(2))
    : (TipAmount = 0);
  const resetCalc = () => {
    setBillValue("");
    setPeopleValue("");
    setButtonValue("");
    setButtonReset(true);
  };

  return (
    <>
      <InputCalculatorWrapper>
        <TextInput
          id={InputBillValues.id}
          text={InputBillValues.text}
          errorText={InputBillValues.errorText}
          placeholder={InputBillValues.placeholder}
          src={BillLogo}
          billValue={billValue}
          getInput={getBillInput}
          inputValue={billValue}
          showError={BillTipFilled}
        ></TextInput>

        <Buttons setButtonInput={buttonReset} getButtonInput={getButtonInput} />

        <TextInput
          id={NumberOfPeopleValues.id}
          text={NumberOfPeopleValues.text}
          errorText={NumberOfPeopleValues.errorText}
          placeholder={NumberOfPeopleValues.placeholder}
          src={PeopleLogo}
          peopleValue={peopleValue}
          inputValue={peopleValue}
          getInput={getPeopleInput}
          showError={BillTipFilled}
        ></TextInput>
      </InputCalculatorWrapper>

      <InfoCalculatorWrapper>
        <Info TipAmount={TipAmount} Bill={Bill} reset={resetCalc} />
      </InfoCalculatorWrapper>
    </>
  );
}
export default Inputs;
