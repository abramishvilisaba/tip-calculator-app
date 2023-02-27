import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  justify-self: center;
  margin: auto;
  align-items: center;
  text-align: center;
  background-color: white;
  height: fit-content;
  width: fit-content;
`;
export const InputInfoContainers = styled(Container)`
  width: calc(50% - 25px);
  height: fit-content;
  /* min-height: 462px; */
  min-height: 400px;
  margin: 0;
  flex-direction: column;

  @media (max-width: 740px) {
    width: 80%;
  }
  @media (max-width: 425px) {
    width: 100%;
  }
`;
export const InputCalculatorWrapper = styled(InputInfoContainers)`
  width: calc(47% - 25px);
  min-width: 300px;
  height: 100%;
  justify-content: flex-start;
  justify-content: space-around;

  /* @media (max-width: 740px) {
    width: 80%;
  } */
`;

export const InfoCalculatorWrapper = styled(InputInfoContainers)`
  width: calc(53% - 25px);
  min-width: 340px;
  height: 100%;
  margin: 0;
  background-color: rgba(0, 71, 75, 1);
  border-radius: 20px;
  border-style: none;
  /* align-self: flex-start; */
  /* justify-self: flex-start; */
  justify-content: flex-start;
  padding: 50px 40px;
  /* @media (max-width: 740px) {
    width: 80%;
  } */
`;

export const InputContainer = styled(InputInfoContainers)``;

export const BillInputContainer = styled(Container)`
  width: 100%;
  background-color: white;
  height: fit-content;
`;

export const BillInput = styled.input`
  /* width: calc(25% - 8px); */
  width: inherit;
  height: 50px;
  background-color: rgba(243, 249, 250, 1);
  border-radius: 5px;
  border-style: none;
  text-align: left;
  padding: 0 5% 0 70%;
  font-size: 24px;
  color: rgba(0, 71, 75, 1);
  font-weight: 800;
  margin-left: -15px;
  :focus {
    outline: rgba(38, 194, 174, 1) solid 2px;
  }
`;

export const InputIcon = styled.img`
  position: relative;
  align-self: center;
  justify-self: flex-start;
  width: 15px;
  height: auto;
  left: 7%;
`;

export const SelectTipContainer = styled(Container)`
  width: 100%;
  background-color: white;
  height: fit-content;
  gap: 15px 5%;
  flex-wrap: wrap;
`;

export const NumberOfPeopleContainer = styled(Container)`
  width: 100%;
  background-color: white;
  height: fit-content;
`;
