import React from "react";
import tw from "twin.macro"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";

import Hero from "components/hero/FullWidthWithImage";
import Features from "components/features/DashedBorderSixFeatures";
import MainFeature from "components/features/TwoColSingleFeatureWithStats2";
import MainFeature2 from "components/features/TwoColWithTwoFeaturesAndButtons.js";
import ContactUs from 'components/cards/ThreeColContactDetails'
import Portfolio from "components/cards/PortfolioTwoCardsWithImage.js";
import Blog from "components/blogs/ThreeColSimpleWithImageAndDashedBorder.js";
import Testimonial from "components/testimonials/TwoColumnWithImageAndProfilePictureReview.js";
import FAQ from "components/faqs/SimpleWithSideImage.js";
import ContactUsForm from "components/forms/TwoColContactUsWithIllustration.js";
import Footer from "components/footers/MiniCenteredFooter.js";
import customerSupportIllustrationSrc from "images/customer-support-illustration.svg";
import FiveColumnDark from "components/footers/FiveColumnDark";

const aboutDescription = 'Our mission is to serve our customers with providing the best possible engineering and field service and supply of the highest quality instruments to meet the needs of our customers in Chemical, Petrochemical, Power, Food & Beverage, Pharmaceutical and other Process Industries.\n\
KAMA Ltd. is a leading supplier of flow meters, control valves, level, pressure and temperature instruments, IS barriers and proximity switches, etc.\n\
Our principals are world wide leaders in their respective field of manufacturing.\n\
Our team boasts a combined experience of more than 100 man-years in control instrumentation.'

const ourTeamCards = [
    {
        name: 'Azriel Kutasov', 
        position: 'President',
        phoneNumber: '+972-(0)54-4600641',
    },
    {
        name: 'Michael Mirinson', 
        position: 'Managing Director',
        phoneNumber: '+972-(0)54-4600644',
    },
    {
        name: 'Joseph Algali', 
        position: 'Manager, Engineering',
        phoneNumber: '+972-(0)54-4600643',
    },
    {
        name: 'Yoni Hizkia', 
        position: 'Manager, Sales and Service',
        phoneNumber: '+972-(0)52-8234371',
    },
    {
        name: 'Nissim Zimmer', 
        position: 'Sales Engineer',
        phoneNumber: '+972-(0)54-4472748',
    },
    {
        name: 'Andrey Firsov', 
        position: 'Sales Engineer',
        phoneNumber: '+972-(0)52-5509168',
    },
    {
        name: 'Mira Assulin', 
        position: 'Sales Engineer',
        phoneNumber: '+972-(0)52-6828272',
    },
    {
        name: 'Diana Firsov', 
        position: 'Inside Sales Engineer',
        phoneNumber: '+972-(0)3-5567747',
    },
    {
        name: 'Lena Shubtsov', 
        position: 'Office Manager',
        phoneNumber: '+972-(0)3-5567747',
    }
]

export default () => (
  <AnimationRevealPage>
    <Hero />
    <MainFeature description={aboutDescription} />
    <ContactUs subheading="Contact Us" heading="Our Team" cards={ourTeamCards} />
    <FiveColumnDark />
  </AnimationRevealPage>
);
