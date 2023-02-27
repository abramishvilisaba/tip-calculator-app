import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    
    font-family: "Space Mono";
    margin:0px;
    padding:0;
    box-sizing: border-box;
    text-align: left;   
    
    
}
`;
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
export const InputText = styled.h1`
  text-align: left;
  justify-content: flex-start;
  margin: 10px 0;
  font-size: calc(20rem * 0.0625);
  font-weight: 700;
  font-family: "Space Mono";
  color: rgba(61, 102, 102, 1);
`;

export default GlobalStyle;
