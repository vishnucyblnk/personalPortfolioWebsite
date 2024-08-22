import React from 'react'
import ProjectCard from '../Components/ProjectCard'
import { Row, Col } from 'react-bootstrap';
import './StylePages.css';
import { zoomInDown } from 'react-animations';
import styled, {keyframes} from 'styled-components';
import HmsImage from '../Images/HmsImage.png';
import pfImage from '../Images/PfImage.png';
import SimpleQuizAppImage from '../Images/SimpleQuizAppImage.png';
import ReactCalcImage from '../Images/ReactCalcImage.png';
import PassGenImage from '../Images/PassGenImage.png';
import AllinOneImage from '../Images/AllinOneImage.png';
import XoGameImage from '../Images/XoGameImage.png';
import ToDoListImage from '../Images/ToDoListImage.png';

const zoomInDownAnimation = keyframes`${zoomInDown}`;
const AnimatedDiv = styled.div`
    animation: 2s ${zoomInDownAnimation};
`;


function Projects() {

    const allProject = [
        {
            projectName: 'Main Project - Hospital Management App',
            projectDesc: `A fully responsive Hospital Management System that efficiently manages all hospital operations, including patient appointments, consultations, and medical records. This integrated solution streamlines workflows across departments, enhancing overall patient care and administrative efficiency.`,
            projectTools: 'ReactJS, Javascript, NodeJS ,ExpressJS, MongoDB, Redux',
            projectImage: HmsImage,
            youtubeLink: 'https://www.youtube.com/embed/N2Ph-3-9nA0?si=3Efyj140BTeO_FBv',
            websiteLink: 'https://hospital-management-system-vnb.vercel.app/',
            githubLink: 'https://github.com/vishnucyblnk/Hmsfrontend'
        },
        {
            projectName: 'MainProject - Project Fair App',
            projectDesc: `ProjectFair is a comprehensive platform for software developers to add, manage, and showcase their projects. Users can explore and access a wide range of development projects available on the site, making it a one-stop destination for software innovation.`,
            projectTools: 'ReactJS, Javascript, NodeJS ,ExpressJS, MongoDB',
            projectImage: pfImage,
            youtubeLink: 'https://www.youtube.com/embed/snxsK0WA2Dk?si=_vKeTQupclYpcOdJ',
            websiteLink: 'https://project-fair-vnb.vercel.app/',
            githubLink: 'https://github.com/vishnucyblnk/project-fair-mern'
        },
        {
            projectName: 'X-O Game',
            projectDesc: `I built a unique multiplayer X-O game in React with a creative twist! Players first set the game size, ranging from 1 to 13, forming a half-pyramid grid of clickable holes. The game begins with Player 1 marking a hole with an "X", followed by Player 2 marking another hole with an "O". The objective is to score by fully occupying rows or columns. When a row or column is completely filled, the size of that row or column is added to the player's score. The game continues until all holes are clicked, and the player with the highest score is declared the winner. This engaging twist on the classic X-O game is both strategic and competitive!`,
            projectTools: 'React, Javascript, CSS3, Bootstrap',
            projectImage: XoGameImage,
            youtubeLink: 'https://www.youtube.com/embed/nu-XNAyQ2gs?si=LwXG9S-Ju0LKECBi',
            websiteLink: 'https://x-o-game-wine.vercel.app/',
            githubLink: 'https://github.com/vishnucyblnk/X-O_Game'
        },
        {
            projectName: 'To-Do-List App',
            projectDesc: `I developed a responsive To-Do List app using React with a JSON server as the backend for seamless task management. The app allows users to add, edit, and delete tasks efficiently. Users can also mark tasks as "Done" or "Not Done". Completed tasks are visually represented with a line-through text decoration, making it easy to track progress. The app's intuitive interface ensures smooth interactions, helping you stay organized and productive!`,
            projectTools: 'ReactJS, JSON Server, Javascript, Bootstrap',
            projectImage: ToDoListImage,
            youtubeLink: 'https://www.youtube.com/embed/RX8ONmgkCTw?si=lHwe80yqxXBIDdGU',
            websiteLink: 'https://todo-list-frontend-iota-ten.vercel.app/',
            githubLink: 'https://github.com/vishnucyblnk/todo-list-frontend'
        },
        {
            projectName: 'Quiz App',
            projectDesc: `A dynamic Quiz App built with React and Firebase, offering engaging quizzes across various subjects. Enjoy an interactive design with React and Bootstrap, while Firebase ensures secure and reliable data management. Perfect for seamless learning and fun!`,
            projectTools: 'ReactJS, Javascript, Firebase, Bootstrap',
            projectImage: SimpleQuizAppImage,
            youtubeLink: 'https://www.youtube.com/embed/yMjYPK7JWWQ?si=lZmkoougIr3nVjp_',
            websiteLink: 'https://quiz-app-drab-three.vercel.app/',
            githubLink: 'https://github.com/vishnucyblnk/quiz-app'
        },
        {
            projectName: 'Simple React Calculator',
            projectDesc: `A Simple Calculator built with React to enhance my front-end development skills. It performs basic arithmetic operations, supports previous answers, and includes a clear button for easy use. Designed with a user-friendly interface for accurate evaluation of mathematical expressions.`,
            projectTools: 'ReactJS, Javascript, Bootstrap',
            projectImage: ReactCalcImage,
            youtubeLink: 'https://www.youtube.com/embed/pARTRe2z4UI?si=pqEhy_Pe620OAJ1W',
            websiteLink: 'https://simple-calculator-five-black.vercel.app/',
            githubLink: 'https://github.com/vishnucyblnk/simple-calculator'
        },
        {
            projectName: 'All-in-One [Timer, Stopwatch, Age-Calculator]',
            projectDesc: `A sleek new website featuring a Stopwatch, Countdown Timer, and Age Calculator designed with Bootstrap for smooth functionality. The Age Calculator provides precise results in years, months, weeks, days, hours, minutes, and seconds. The Stopwatch includes start/pause/stop, lap time, and split time functions. The Countdown Timer boosts productivity with custom countdowns for work and tasks.`,
            projectTools: 'HTML5, CSS3, Javascript, Bootstrap',
            projectImage: AllinOneImage,
            youtubeLink: 'https://www.youtube.com/embed/jtS6_1Sp4OI?si=a3NGd12WfGFgTuZB',
            websiteLink: 'https://stopwtch-timer-agecalculator.netlify.app/',
            githubLink: 'https://github.com/vishnucyblnk/stopwtch_timer_agecalc'
        },
        {
            projectName: 'Password Generator',
            projectDesc: `I developed a responsive Password Generator website using HTML, CSS, and JavaScript to enhance digital security. It swiftly creates strong, unique passwords in just a few clicks, saving you valuable time. Customize your password by selecting its length, including uppercase and lowercase letters, numbers, and optional symbols. The simple interface ensures a seamless experience, and the "Copy to Clipboard" feature makes it easy to use your new password instantly.`,
            projectTools: 'HTML5, CSS3, Javascript',
            projectImage: PassGenImage,
            youtubeLink: 'https://www.youtube.com/embed/DfldaAOtGpU?si=zbagHVxIAY-7EJLA',
            websiteLink: 'https://passwordgenerateor.netlify.app/',
            githubLink: 'https://github.com/vishnucyblnk/password-generator'
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

