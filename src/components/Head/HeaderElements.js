import styled from "styled-components";

export const HeaderWrapper = styled.div`
  width: auto;
  display: flex;
  height: fit-content;
  justify-content: center;
  background-color: hsl(185, 41%, 84%);
  margin-bottom: -1px;
  align-items: center;
  @import url("https://fonts.googleapis.com/css2?family=Space+Mono:wght@700&display=swap");
`;

export const HeaderTextWrapper = styled.div`
  margin: 150px 0 100px 0;
  display: flex;
  height: fit-contnent;
  justify-content: center;
  flex-direction: column;
  gap: 0px;
`;

export const HeaderText = styled.h1`
  margin: 0;
  text-align: center;
  padding-left: 10px;
  font-size: calc(26rem * 0.0625);
  width: auto;
  letter-spacing: 10px;
  font-weight: 700;
  /* font-family: "Space Mono"; */
  font-weight: 700;
  color: rgba(61, 102, 102, 1);
  color: "red";
`;
