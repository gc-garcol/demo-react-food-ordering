import styled from "styled-components"

const SplashContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #FE724C;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LogoIcon = styled.img.attrs(props => ({
  src: props.src
}))`
  width: calc(182 / 375 * 100%);
`;

export const Style = {
  SplashContainer,
  LogoIcon
}