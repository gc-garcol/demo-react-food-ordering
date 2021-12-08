import React, { useRef, useState } from "react";
import { Icon, Input } from "semantic-ui-react";
import { Container, Label, Title, LoginButotn } from "./login.style";
import "./index.scss";

const LoginPage = (props: any) => {
  const passwordInputEl = useRef(null);
  const emailInputEl = useRef(null);
  const [showPassword, toggleShowPassword] = useState(false);

  return (
    <Container className="login-container">
      <Title style={ {marginBottom: '32px'} }>Login</Title>
      <Container className="email-container">
        <Label>E-mail</Label>
        <Input
          className="login-input --email"
          placeholder="Your email or phone"
          ref={ emailInputEl }
          type="text"
          autoComplete="off"
        />
      </Container>

      <Container className="password-container">
        <Label>Password</Label>
        <Input
          className="login-input --password"
          autoComplete="new-password"
          placeholder="Password"
          ref={ passwordInputEl }
          type={  showPassword ? "text" : "password" }
          icon={
            <Icon 
              name="eye"
              className={ ["password-icon", showPassword ? "--open" : ""].join(" ") }
              link
              onClick={ () => toggleShowPassword(!showPassword) }
            />
          }
        />
      </Container>

      <LoginButotn>LOGIN</LoginButotn>
    </Container>
  );
}

export default LoginPage;