import React from "react";
import tw from "twin.macro"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";

import Hero from "components/hero/FullWidthWithImage";
import MainFeature from "components/features/TwoColSingleFeatureWithStats2";
import ContactUs from 'components/cards/ThreeColContactDetails'
import FiveColumnDark from "components/footers/FiveColumnDark";

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
    <MainFeature />
    <ContactUs subheading="Contact Us" heading="Our Team" cards={ourTeamCards} />
    <FiveColumnDark />
  </AnimationRevealPage>
);
