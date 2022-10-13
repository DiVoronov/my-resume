import * as React from "react";
import { NavLink } from 'react-router-dom';
import styled from "styled-components";
import { globalAccentColor } from "../../GlobalStyle";

// $globalAccentColor: globalAccentColor;

export const StyledNavLink = styled(NavLink)`
margin: 0px 10px;
color: inherit;
text-decoration: none;
fontSize: 1rem;
&:hover {
  color: ${globalAccentColor};
};
&:active {
  color: ${globalAccentColor};
};
`