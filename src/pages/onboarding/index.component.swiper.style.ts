import styled from "styled-components";

const Container = styled.div`

`;

const ImageWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const LogoIcon = styled.img.attrs(props => ({
  src: props.src
}))`

`;

const Title = styled.h1`
  font-family: Sofia Pro;
  font-style: normal;
  font-weight: normal;
  line-height: 116%;
  color: #FFFFFF;
  text-align: center;
`

const Content = styled.p`
font-family: Sofia Pro;
font-style: normal;
font-weight: normal;
line-height: 160%;
text-align: center;
color: #C9CCD1;
margin-top: 12px;
`

const Pagination = styled.div.attrs(props => ({
  className: 'onboarding-swiper-pagination',
}))`
  margin-top: 60px;
`;

const paginationProps = {
  el: '.onboarding-swiper-pagination',
  clickable: true
}

const Navigation = styled.div.attrs(props => ({
  className: 'onboarding-swiper-next',
}))`
  width: 68px;
  height: 68px;
  border-radius: 50%;
  background-color: #FE724C;
  margin-top: 44px;
  margin-left: 50%;
  transform: translateX(-50%);
  &:hover {
  }
`;

const navigationProps = {
  nextEl: ".onboarding-swiper-next"
}

const rightIconStyle = { 
  fontSize: '20px', 
  color: '#FFFFFF', 
  marginTop: '50%', 
  marginLeft: '50%', 
  transform: 'translate(-50%, -50%)' 
}

export const Style = {
  Container,
  ImageWrapper,
  LogoIcon,
  Title,
  Content,
  Pagination,
  paginationProps,
  Navigation,
  navigationProps,
  rightIconStyle
}