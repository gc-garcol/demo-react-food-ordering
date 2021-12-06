import React from "react";

import { Style } from "./index.style";
import { swiperResources } from "./index.resource";

import OnboardingSwiper from "./index.component.swiper";

const Onboarding = (props: any) => {
  return (
    <React.Fragment>
      <Style.OnboardingContainer>
        <OnboardingSwiper items={swiperResources} />
      </Style.OnboardingContainer>
    </React.Fragment>
  );
}

export default Onboarding;