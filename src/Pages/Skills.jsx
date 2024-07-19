import React from 'react'
import { DiJavascript1 } from 'react-icons/di'
import { FaBootstrap, FaCss3, FaGitAlt, FaHtml5, FaNodeJs, FaPython } from 'react-icons/fa'
import { RiReactjsLine } from 'react-icons/ri'
import { SiC, SiCplusplus, SiMongodb, SiTailwindcss } from 'react-icons/si'
import {Row, Col} from 'react-bootstrap';
import { zoomIn,pulse } from 'react-animations';
import styled, { keyframes } from 'styled-components';


const zoomInAnimation = keyframes`${zoomIn}`;
const pulseAnimation = keyframes`${pulse}`;

// Styled component for skill items
const AnimatedDiv = styled.div`
  animation: ${zoomInAnimation} 1.5s cubic-bezier(0.4, 0, 0.6, 1), ${pulseAnimation} 1s cubic-bezier(0.4, 0, 0.6, 1) infinite;

  transform-origin: center;
`;


function Skills() {
    const skillSet = [
        {
            skillName: 'HTML5', skillIcon: <FaHtml5 /> },
        {
            skillName: 'CSS3', skillIcon: <FaCss3 /> },
        {
            skillName: 'Javascript', skillIcon: <DiJavascript1 /> },
        {
            skillName: 'React', skillIcon: <RiReactjsLine /> },
        {
            skillName: 'NodeJS', skillIcon: <FaNodeJs /> },
        {
            skillName: 'MongoDB', skillIcon: <SiMongodb /> },
        {
            skillName: 'Bootstrap', skillIcon: <FaBootstrap /> },
        {
            skillName: 'C', skillIcon:  <SiC /> },
        {
            skillName: 'C++', skillIcon: <SiCplusplus /> },
        {
            skillName: 'Python', skillIcon:  <FaPython /> },
        {
            skillName: 'Tailwind', skillIcon:  <SiTailwindcss /> },
        {
            skillName: 'Git', skillIcon:  <FaGitAlt /> },
    ]

    return (
        <> 
            <Row>
                <h3 style={{color:'#4b4b4b'}}>Things I Can Do</h3>
                
                {
                    skillSet.map((eachItem) => (
                        <Col sm={6} md={4} lg={3} key={eachItem.skillName} className='p-3'>
                            <AnimatedDiv className='d-flex flex-column justify-content-center align-items-center fs-2'>
                                {eachItem.skillIcon}
                                <h6 className='text-black'>{eachItem.skillName}</h6>   
                            </AnimatedDiv>
                        </Col>
                    ))
                }
            </Row>
        </>
    )
}

export default Skills