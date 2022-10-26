import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { globalCustomStyles } from "../../GlobalStyle";


export const StyledNavLink = styled.div`
& div {
  margin: 0px 10px;
  padding: 10px;
  border-radius: 10px;
}
& a {
  text-decoration: none;
  fontSize: 1rem;
  align-self: center;
  justify-content: center;
}

@media screen and (max-width: 450px) {
  & div {
    padding: 10px 1px;
  }
};
`;