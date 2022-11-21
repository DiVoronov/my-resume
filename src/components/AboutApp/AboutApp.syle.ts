import React from "react";
import styled from "styled-components";

export const StyledAboutApp = styled.div`
display: flex; 
flex-direction: column; 
padding: 1rem;
& span {
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  text-align: justify;
  justify-content: space-beteen;
}
& h1 {
  margin-bottom: 20px;
  text-align: center;
}
`;