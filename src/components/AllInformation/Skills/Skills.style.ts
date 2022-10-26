import React from "react";
import styled from "styled-components";

export const StyledSkillsDiv = styled.div`
display: flex;
justify-content: space-between;
flex-direction: column;
gap: 10px;

& li {
  list-style-type: none;
  margin-left: 1rem;
}
& h2 {
  font-weight: 900;
  text-align: center;
  margin-bottom: 20px; 
}
& > div {
  padding: 20px;
  border-radius: 25px;

  & span {
    display: flex;
    align-items: center;
    text-align: justify;
  }
  & div {
    font-weight: 600;
    margin-top: 20px; 
    font-weight: 900;
  }
}
`;