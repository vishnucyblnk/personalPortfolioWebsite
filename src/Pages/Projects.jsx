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
            projectDesc: 'A fully responsive Hospital Management System that efficiently manages all hospital operations, including patient appointments, consultations, and medical records. This integrated solution streamlines workflows across departments, enhancing overall patient care and administrative efficiency.',
            projectTools: 'ReactJS,Javascript, NodeJS ,ExpressJS, MongoDB, Redux',
            projectImage: hmsImage,
            youtubeLink: 'https://www.youtube.com/embed/N2Ph-3-9nA0?si=3Efyj140BTeO_FBv',
            websiteLink: 'https://hospital-management-system-vnb.vercel.app/',
            githubLink: 'https://github.com/vishnucyblnk/Hmsfrontend'
        },
        {
            projectName: 'Project Fair App',
            projectDesc: 'ProjectFair is a comprehensive platform for software developers to add, manage, and showcase their projects. Users can explore and access a wide range of development projects available on the site, making it a one-stop destination for software innovation.',
            projectTools: 'ReactJS,Javascript, NodeJS ,ExpressJS, MongoDB',
            projectImage: pfImage,
            youtubeLink: '',
            websiteLink: 'https://project-fair-vnb.vercel.app/',
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