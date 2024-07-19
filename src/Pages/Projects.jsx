import React from 'react'
import ProjectCard from '../Components/ProjectCard'
import hmsImage from '../Images/hmsImage.png';
import pfImage from '../Images/PfImage.png';
import { Row, Col } from 'react-bootstrap';
import './StylePages.css';
import { zoomInDown } from 'react-animations';
import styled, {keyframes} from 'styled-components';

const zoomInDownAnimation = keyframes`${zoomInDown}`;
const AnimatedDiv = styled.div`
    animation: 2s ${zoomInDownAnimation};
`;


function Projects() {
    const allProject = [
        {
            projectName: 'Hospital Management App',
            projectDesc: 'A fully functional Responsive project based on Hospital Management System which Manages all the things associated with the hospital including appointment, consultations etc.',
            projectTools: 'ReactJS,Javascript, NodeJS ,ExpressJS, MongoDB, Redux',
            projectImage: hmsImage,
            websiteLink: 'https://hospitalmanagementsystem-vishnu-nair-bs-projects.vercel.app/',
            githubLink: 'https://github.com/vishnucyblnk/Hmsfrontend'
        },
        {
            projectName: 'Project Fair',
            projectDesc: 'Project fair app is a One Stop Destination for all Software Development Projects. Where User can add and manage their projects. As well as access all projects available in our website.',
            projectTools: 'ReactJS,Javascript, NodeJS ,ExpressJS, MongoDB',
            projectImage: pfImage,
            websiteLink: 'https://project-fair-mern-nine.vercel.app/',
            githubLink: 'https://github.com/vishnucyblnk/project-fair-mern'
        },

    ]
    return (
        <Row className='fs-5 text-black g-3 mb-4'>    
            <AnimatedDiv><h3 style={{color:'#4b4b4b'}}>A Collection of Project I've Built</h3></AnimatedDiv>
            {
                allProject.map((eachProject) => (
                    <Col sm={12} md={12} lg={6}  key={eachProject.projectName}>
                        <AnimatedDiv className='projects p-2 rounded'>
                                <ProjectCard eachProject={eachProject} />
                        </AnimatedDiv>
                    </Col>
                ))
            }   
        </Row>
        
    )
}

export default Projects