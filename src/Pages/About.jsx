import React from 'react';
import { BsFiletypePdf } from 'react-icons/bs';
import { GoArrowDown } from "react-icons/go";
import { fadeInDown } from 'react-animations';
import styled, { keyframes } from 'styled-components';
import './StylePages.css';
import { Link } from 'react-router-dom';

const fadeInDownAnimation = keyframes`${fadeInDown}`;
const AnimatedDiv = styled.div`
    animation: 2s ${fadeInDownAnimation};
`;

function About() {

    const resumePdf = 'https://drive.google.com/file/d/1QuAXE8HuMAofummSO17qbH76Br9bMil6/view?usp=sharing';

    return (
        <>
            <AnimatedDiv className='mb-4'>
                <h3 className='d-flex justify-content-start ' style={{ color: '#4b4b4b' }}>About Me</h3>
                <h6 className='text-black fs-5' >Hello! I'm <span className='fw-bold fs-4 ' style={{ color: '#4b4b4b' }}>VISHNU NAIR B</span> from Kerala, a passionate and dedicated <span className=' fw-bold' style={{ color: '#4b4b4b' }}>Full Stack Developer</span>. I have a <span className=' fw-bold' style={{ color: '#4b4b4b' }}>B.Tech in Computer Science Engineering from Cochin University of Science and Technology and a certificate of Full Stack Developement from NACTET </span>, and I'm eager to bring my skills and enthusiasm to the tech industry. </h6>

                <h3 className='d-flex justify-content-start' style={{ color: '#4b4b4b' }}>My Approach</h3>
                <h6 className='text-black fs-5' >I believe in continuous learning and keeping up with the latest trends and advancements in technology. My approach to development is centered around creating user-friendly and scalable applications. I'm committed to writing clean, efficient, and maintainable code.</h6>

                <h3 className='d-flex justify-content-start' style={{ color: '#4b4b4b' }}>What's Next ?</h3>
                <h6 className='pb-4 text-black fs-5'>I'm currently seeking opportunities to apply my skills in a professional setting. I'm excited about the possibility of working with a dynamic team and contributing to impactful projects. If you have an opportunity that aligns with my skills and interests, I'd love to hear from you!</h6>

                <Link className="fs-4 bton p-2" to={resumePdf} target='_blank' rel="noopener noreferrer"><BsFiletypePdf/> Dowload / View Resume <GoArrowDown/></Link>

            </AnimatedDiv>
        </>

    )
}

export default About
