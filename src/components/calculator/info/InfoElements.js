import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin: auto;
  box-sizing: content-box;
  background-color: white;
  height: fit-content;
  width: fit-content;
  @import url("https://fonts.googleapis.com/css2?family=Space+Mono:wght@700&display=swap");
`;
export const InputInfoContainers = styled(Container)`
  min-width: 300px;
  width: calc(50% - 25px);
  height: fit-content;
  margin: auto;
  flex-direction: column;
  /* gap: 20px; */

  @media (max-width: 425px) {
    width: 100%;
  }
  @media (max-width: 690px) {
    width: 80%;
  }
`;

export const InfoContainer = styled.div`
  box-sizing: border;
  display: flex;
  width: 100%;
  height: fit-content;
  /* justify-content: end;
  align-items: end; */
  /* padding: 20px 40px; */
  /* justify-content: space-between; */
`;

export const InfoWrapper = styled(InputInfoContainers)`
  /* height: 402px; */
  display: flex;
  margin: 10px 0px 0px 0px;
  background-color: rgba(0, 71, 75, 1);
  border-radius: 20px;
  border-style: none;

  /* padding: 0 40px; */
`;

export const TextContainer = styled.div`
  flex-direction: column;
  width: 100%;
  align-content: start;
  align-items: start;
  margin: 0px 0px 40px 0px;
  justify-content: flex-start;
`;

export const TextWrapper = styled.div`
  display: flex;
`;
export const InfoText = styled.h1`
  width: 100%;
  text-align: center;
  color: white;
  align-items: flex-start;
  margin: 0;
`;

export const TipAmountText = styled(InfoText)`
  color: white;
  font-size: 15px;
  text-align: left;
`;

export const PerPersonText = styled(InfoText)`
  font-size: 12px;
  color: gray;
  text-align: left;
  color: rgba(127, 157, 159, 1);
`;

export const BillValueText = styled(InfoText)`
  font-size: 40px;
  color: rgba(38, 194, 174, 1);
  text-align: right;
  margin-top: -10px;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  /* height: 100%; */
  margin: 80px 0px 0px 0px;
  display: flex;
  /* justify-self: end;
  align-self: end; */
  align-items: flex-end;
  justify-content: center;
`;

export const ResetButton = styled.input`
  max-width: 500px;
  min-width: 90px;
  /* width: 30%; */
  padding: 1px 6px;
  width: 100%;
  height: 50px;
  border: none;
  border-radius: 5px;
  outline: none;
  font-size: calc(20rem * 0.0625);
  text-align: center;
  font-family: "Space Mono";
  color: rgba(0, 71, 75, 1);
  background-color: rgba(13, 104, 109, 1);

  background-color: ${(props) =>
    props.activated === true && props.type === "button"
      ? "rgba(38, 194, 174, 1)"
      : "rgba(13, 104, 109, 1)"};

  &:hover {
    background-color: rgba(159, 232, 223, 1);
    cursor: pointer;
  }
`;
