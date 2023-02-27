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

export const SelectTipText = styled.h1`
  text-align: left;
  justify-content: flex-start;
  margin: 10px 0;
  font-size: calc(16rem * 0.0625);
  font-weight: 700;
  font-family: "Space Mono";
  color: rgba(94, 122, 125, 1);
`;

export const ButtonsContainer = styled(Container)`
  width: 100%;
  background-color: white;
  height: fit-content;
  gap: 15px 5%;
  flex-wrap: wrap;
`;
export const ButtonsWrapper = styled(Container)`
  width: 100%;
  margin: 0px;
`;

export const Button = styled.input`
  max-width: 500px;
  min-width: 90px;
  /* width: 30%; */
  padding: 1px 6px;
  width: 30%;
  height: 50px;
  border: 2px solid white;
  border-radius: 10px;
  outline: none;
  font-size: calc(20rem * 0.0625);
  text-align: center;
  font-family: "Space Mono";
  color: ${(props) =>
    props.activated === true && props.type === "button"
      ? "rgba(0, 71, 75, 1)"
      : "white"};
  color: ${(props) => (props.type === "text" ? "rgba(0, 71, 75, 1)" : null)};
  background-color: ${(props) =>
    props.type === "button" ? "rgba(0, 71, 75, 1)" : "rgba(243, 249, 250, 1)"};
  background-color: ${(props) =>
    props.activated === true && props.type === "button"
      ? "rgba(38, 194, 174, 1)"
      : null};
  &:hover {
    cursor: pointer;
  }
  &:focus {
    border: ${(props) =>
      props.type === "text" ? "rgba(38, 194, 174, 1) solid 2px;" : null};
  }
`;
