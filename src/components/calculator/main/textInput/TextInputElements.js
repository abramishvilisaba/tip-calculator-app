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

export const InputContainer = styled(Container)`
  width: inherit;
  justify-content: space-between;
  margin: 0px;
`;

export const BillInputContainer = styled(Container)`
  width: 100%;
  background-color: white;
  height: fit-content;
  flex-direction: column;
  justify-content: left;
  justify-items: left;
  text-align: left;
  margin: 0px;
`;

export const BillInput = styled.input`
  /* width: calc(25% - 8px); */
  width: inherit;
  height: 50px;
  background-color: rgba(243, 249, 250, 1);
  border-radius: 5px;
  border-style: none;
  text-align: right;
  padding: 0 5% 0 20%;
  font-size: 24px;
  color: rgba(0, 71, 75, 1);
  font-weight: 800;
  margin: 0px 0px 0px -15px;
  outline: ${(props) =>
    props.showError && props.id === 2
      ? "rgba(225, 116, 87, 1) solid 2px"
      : "none"};
  ::placeholder {
    text-align: end;
  }
  &:focus {
    outline: rgba(38, 194, 174, 1) solid 2px;
  }
  &:hover {
    cursor: pointer;
  }
`;

export const InputIcon = styled.img`
  position: relative;
  align-self: center;
  justify-self: flex-start;
  width: 12px;
  height: auto;
  left: 7%;
`;

export const InputText = styled.h1`
  text-align: left;
  justify-content: flex-start;
  margin: 10px 0;
  font-size: calc(16rem * 0.0625);
  font-weight: 700;
  font-family: "Space Mono";
  color: rgba(94, 122, 125, 1);
`;

export const InputTextError = styled.h1`
  text-align: left;
  justify-content: flex-start;
  margin: 10px 0;
  font-size: calc(15rem * 0.0625);
  font-weight: 700;
  font-family: "Space Mono";
  color: rgba(225, 116, 87, 1);
  display: ${(props) => (props.showError && props.id === 2 ? "flex" : "none")};
`;
