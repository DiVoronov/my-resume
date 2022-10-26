import React from "react";
import styled from "styled-components";

export const StyledHeadDiv = styled.div`
font: bold; 
font-size: 1.5rem;
text-align: center;
font-weight: 900;
margin: 20px 0px;
`;

export const StyledTextDiv = styled.div`
text-align: justify;
margin: 20px;

@media screen and (max-width: 450px) {
  margin: 0px;
}
`;