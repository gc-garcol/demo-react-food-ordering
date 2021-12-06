import React from "react";

import { Style } from "./index.style";

import logo from "./static/logo.svg";

const Splash = (props: any) => {
  return (
    <React.Fragment>
      <Style.SplashContainer>
        <Style.LogoIcon src={logo} />
      </Style.SplashContainer>
    </React.Fragment>
  )
}

export default Splash;
