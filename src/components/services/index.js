import React from 'react';
import icon1 from '../../images/svg-5.svg';
import icon2 from '../../images/svg-4.svg';
import icon3 from '../../images/svg-1.svg';
import {
        ServicesContainer,
        ServicesH1,
        ServicesH2,
        ServicesWrapper,
        ServicesCard,
        ServicesIcon,
        ServicesP,
       } from './services-elements';

const Services = () => {
    return (
        <ServicesContainer id='services'>
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={icon1}></ServicesIcon>
                    <ServicesH2>Reduce Expenses</ServicesH2>
                    <ServicesP>We help reduce your fees and increase your overall revenue.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={icon2}></ServicesIcon>
                    <ServicesH2>Virtual Offices</ServicesH2>
                    <ServicesP>You can access our platform online anywhere in the world.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={icon3}></ServicesIcon>
                    <ServicesH2>Premium Benefits</ServicesH2>
                    <ServicesP>Unlock our special membership card that returns 5% cash back.</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
