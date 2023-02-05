import React from "react";
import tw from "twin.macro"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";

import Hero from "components/hero/FullWidthWithImage";
import Features from "components/features/DashedBorderSixFeatures";
import MainFeature from "components/features/TwoColSingleFeatureWithStats2";
import MainFeature2 from "components/features/TwoColWithTwoFeaturesAndButtons.js";
import Portfolio from "components/cards/PortfolioTwoCardsWithImage.js";
import Blog from "components/blogs/ThreeColSimpleWithImageAndDashedBorder.js";
import Testimonial from "components/testimonials/TwoColumnWithImageAndProfilePictureReview.js";
import FAQ from "components/faqs/SimpleWithSideImage.js";
import ContactUsForm from "components/forms/TwoColContactUsWithIllustration.js";
import Footer from "components/footers/MiniCenteredFooter.js";
import customerSupportIllustrationSrc from "images/customer-support-illustration.svg";

const aboutDescription = `Our mission is to serve our customers with providing the best possible engineering and field service and supply of the highest quality instruments to meet the needs of our customers in Chemical, Petrochemical, Power, Food & Beverage, Pharmaceutical and other Process Industries.
KAMA Ltd. is a leading supplier of flow meters, control valves, level, pressure and temperature instruments, IS barriers and proximity switches, etc.
Our principals are world wide leaders in their respective field of manufacturing.
Our team boasts a combined experience of more than 100 man-years in control instrumentation.`

export default () => (
  <AnimationRevealPage>
    <Hero />
    <MainFeature description={aboutDescription} />

  </AnimationRevealPage>
);
