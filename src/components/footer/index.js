import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { FaFacebook, FaYoutube, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import {FooterContainer, 
        FooterWrap, 
        FooterLinksContainer, 
        FooterLinksWrapper, 
        FooterLinkItems, 
        FooterLinkTitle, 
        FooterLink,
        SocialMedia,
        SocialIcons,
        SocialLogo,
        WebsiteRights,
        SocialMediaWrap,
        SocialIconLink} from './foot-elements';

const Footer = () => {
    
    const toggleHome = () => {
        scroll.scrollToTop()
    };

    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                                <FooterLink to='/signin'>How It Works</FooterLink>
                                <FooterLink to='/signin'>Testimonials</FooterLink>
                                <FooterLink to='/signin'>Careers</FooterLink>
                                <FooterLink to='/signin'>Investors</FooterLink>
                                <FooterLink to='/signin'>Terms of Service</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Contact Us</FooterLinkTitle>
                                <FooterLink to='/'>Contact</FooterLink>
                                <FooterLink to='/'>Support</FooterLink>
                                <FooterLink to='/'>Destinations</FooterLink>
                                <FooterLink to='/'>Sponserships</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Videos</FooterLinkTitle>
                                <FooterLink to='/'>Submit Video</FooterLink>
                                <FooterLink to='/'>Ambassadors</FooterLink>
                                <FooterLink to='/'>Agency</FooterLink>
                                <FooterLink to='/'>Influencer</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Social Media</FooterLinkTitle>
                                <FooterLink to='/'>Instagram</FooterLink>
                                <FooterLink to='/'>Facebook</FooterLink>
                                <FooterLink to='/'>Youtube</FooterLink>
                                <FooterLink to='/'>Twitter</FooterLink>
                                <FooterLink to='/'>Linkedin</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>Fintech</SocialLogo>
                        <WebsiteRights>Fintech © {new Date().getUTCFullYear()} All rights reserved.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink 
                                href="/" 
                                target="_blank"
                                aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink 
                                href="/" 
                                target="_blank"
                                aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink 
                                href="/" 
                                target="_blank"
                                aria-label="Youtube">
                                <FaYoutube />
                            </SocialIconLink>
                            <SocialIconLink 
                                href="/" 
                                target="_blank"
                                aria-label="Twitter">
                                <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink 
                                href="/" 
                                target="_blank"
                                aria-label="Linkedin">
                                <FaLinkedin />
                            </SocialIconLink>    
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
