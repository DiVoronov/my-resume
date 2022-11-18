import React from "react";
import styled from "styled-components";

export const StyledNavLink = styled.div`
font-family: 'Yanone Kaffeesatz', sans-serif;
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