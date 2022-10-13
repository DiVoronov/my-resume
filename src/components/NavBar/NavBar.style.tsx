import * as React from "react";
import { NavLink } from 'react-router-dom';
import styled from "styled-components";
import { globalAccentColor } from "../../GlobalStyle";


export const StyledNavLink = styled(NavLink)`
margin: 0px 10px;
color: inherit;
text-decoration: none;
fontSize: 1rem;
align-self: center;
justify-content: center;
&:hover {
  color: ${globalAccentColor};
};
&:active {
  color: ${globalAccentColor};
};
`