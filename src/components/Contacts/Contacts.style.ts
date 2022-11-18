import React from "react";
import styled from "styled-components";

export const StyledContactDiv = styled.div`
max-height: 50%;
padding: auto;
& > div div {
  display: flex;
  flex-wrap; nowrap;
  margin-left: 20px;
}
& h1 {
  font-weight: 900;
  text-align: center;
  margin-bottom: 20px; 
}
& span {
  font-weight: 600;
  margin: 5px 30px 5px 0px;
}
& a {
  text-decoration: none;
}

@media screen and (max-width: 360px) {
  & div {
    flex-wrap; wrap;
    flex-direction: column;
  }
}
`;