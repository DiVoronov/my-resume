import React from "react";
import styled from "styled-components";

export const StyledBigText = styled.div`
font-size: 15vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
& span {
  font-family: 'Yanone Kaffeesatz', sans-serif;
  display: flex;
  flex-direction: column;
}

@media screen and (max-width: 450px) {
  font-size: 10vh;
}
`;