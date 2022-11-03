import styled from "styled-components";

export const StyledWelcomePageDiv = styled.div`
text-align: center;
min-height: 100vh;

& h1, h2 {
  margin: 1rem;
}

& a {
  text-decoration: none;
  color: inherit;
}

& .animatedNavLink {
  position: relative;
  overflow: hidden;
  background-color: transparent;
  text-align: center;
  text-transform: uppercase;
  font-size: 16px;
  transition: .3s;
  z-index: 1;
  font-family: inherit;
  &::before {
    content: '';
    width: 0;
    height: 1000%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
    background: rgba(255, 95, 255, 0.3);
    transition: .5s ease;
    display: block;
    z-index: -1;
  }
  &:hover::before {
    width: 150%;
  }
  &:hover {
    cursor: pointer;
    color: #fff;
    scale: 1.02;
  }
}
`;