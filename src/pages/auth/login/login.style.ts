import styled from "styled-components";

export const Container = styled.div.attrs(props => ({
  style: props.style
}))`
`;

export const Label = styled.label.attrs(props => ({
}))`
  display: block;
  font-family: Sofia Pro;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 16px;
  color: #ADADB8;
  margin-bottom: 12px;
`;

export const Title = styled.h1.attrs(props => ({
  style: props.style
}))`
font-family: Sofia Pro;
font-style: normal;
font-weight: 600;
font-size: 36.4127px;
line-height: 120%;
color: #FFFFFF;
`;

export const LoginButton = styled.button.attrs(props => ({
  
}))`
  border: none;
  width: 248px;
  height: 60px;
  border-radius: 30px;
  background-color: #FE724C;
  color: #FFFFFF;
  font-family: Sofia Pro;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 15px;
  text-align: center;
  letter-spacing: 0.08em;
  margin-left: 50%;
  margin-top: 32px;
  transform: translateX(-50%);
  &:hover {
    background-color: #FE725C;
  }
`;
