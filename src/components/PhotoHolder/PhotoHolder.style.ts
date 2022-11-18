import styled from "styled-components";

export const StyledPhotoHolder = styled.div`
height: 100%;
display: flex;
flex-wrap: wrap;
justify-content: center;
align-content: center;
flex-direction: column;
flex-shrink: 5;
align-items: center;
border-radius: 25px;
margin: 2rem;
padding: 2rem;

& .avatarAPI {
  position: relative;
  &::before {
    content: '';
    z-index: 10;
    position: absolute;
    display: flex;
    justify-content: center;
    top: 30%;
    width: 50%;
    height: 2rem;
  }
  &:hover::before {
    display: none;
  }
}

@media screen and (max-width: 450px) {
  & .avatarAPI::before {
    display: none;
}
`