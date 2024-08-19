import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { Link } from 'react-router-dom';
import './StylePages.css';
import { bounceInRight } from 'react-animations';
import styled, { keyframes } from 'styled-components';


const bounceInRightAnimation = keyframes`${bounceInRight}`;

const AnimatedbounceInRightDiv = styled.div`
    animation: 3s ${bounceInRightAnimation} forwards;
`;

const WhatsappIcon = styled(AnimatedbounceInRightDiv)`
  animation-delay: 0.5s;
`;

const LinkedInIcon = styled(AnimatedbounceInRightDiv)`
  animation-delay: 1s;
`;

const GithubIcon = styled(AnimatedbounceInRightDiv)`
  animation-delay: 1.5s;
`;

const InstagramIcon = styled(AnimatedbounceInRightDiv)`
  animation-delay: 2s;
`;


function Sidebar() {
    return (
        <>
            <div className="sidebar p-3">
                <WhatsappIcon>
                    <Link className='linkIcon text-decoration-none ' to="https://wa.me/919497815913" target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp size={50} />
                    </Link>
                </WhatsappIcon>
                <LinkedInIcon>
                    <Link className='linkIcon text-decoration-none ' to="https://www.linkedin.com/in/vishnu-nair-b-dev" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin size={50} />
                    </Link>
                </LinkedInIcon>
                <GithubIcon>
                    <Link className='linkIcon text-decoration-none ' to="https://github.com/vishnucyblnk" target="_blank" rel="noopener noreferrer">
                        <FaGithub size={50} />
                    </Link>
                </GithubIcon>
                <InstagramIcon>
                    <Link className='linkIcon text-decoration-none ' to="https://www.instagram.com/vishnunair_b/" target="_blank" rel="noopener noreferrer">
                        <FaInstagram size={50} />
                    </Link>
                </InstagramIcon>
                
            </div>
        </>
    )
}

export default Sidebar