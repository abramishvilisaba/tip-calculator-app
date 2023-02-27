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
  @import url("https://fonts.googleapis.com/css2?family=Space+Mono:wght@700&display=swap");
`;

export const BodyContainer = styled(Container)`
  padding: 0 0 400px 0;
  background-color: hsl(185, 41%, 84%);
  height: fit-content;
  width: 100%;
`;

export const CalcWrapper = styled(Container)`
  width: calc(920px + 0px);
  height: 470px;
  background-color: white;
  border-radius: 25px;
  padding: 30px 50px;
  margin: 0 0;
  flex-wrap: wrap;
  gap: 50px;
  box-sizing: border-box;
  @media (max-width: 1024px) {
    width: 90%;
  }
  @media (max-width: 880px) {
    gap: 40px;
    width: 100%;
    padding: 30px;
    margin: 0px;
    height: fit-content;
  }

  @media (max-width: 425px) {
    padding: 20px;
    margin: 0px;
  }
`;
