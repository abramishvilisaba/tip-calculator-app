import React from "react";
import {
  TextContainer,
  TipAmountText,
  PerPersonText,
  InfoWrapper,
  BillValueText,
  ResetButton,
  ButtonWrapper,
  InfoContainer,
} from "./InfoElements";
const Info = ({ TipAmount, Bill, reset }) => {
  console.log("Bill" + Bill);
  return (
    <InfoWrapper>
      <InfoContainer>
        <TextContainer>
          <TipAmountText>Tip Amount</TipAmountText>
          <PerPersonText>/ Person</PerPersonText>
        </TextContainer>
        <TextContainer>
          <BillValueText>${TipAmount}</BillValueText>
        </TextContainer>
      </InfoContainer>
      <InfoContainer>
        <TextContainer>
          <TipAmountText>Total</TipAmountText>
          <PerPersonText>/ Person</PerPersonText>
        </TextContainer>
        <TextContainer>
          <BillValueText>${Bill}</BillValueText>
        </TextContainer>
      </InfoContainer>
      {/* <InfoContainer> */}
      <ButtonWrapper>
        <ResetButton
          type={"button"}
          defaultValue={"RESET"}
          activated={TipAmount ? true : false}
          onClick={reset}
        />
      </ButtonWrapper>
      {/* </InfoContainer> */}
    </InfoWrapper>
  );
};

export default Info;
