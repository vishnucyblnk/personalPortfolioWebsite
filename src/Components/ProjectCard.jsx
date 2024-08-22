import React from 'react';
import { Link } from 'react-router-dom';
import './StyleComp.css';
import VideoDisp from './VideoDisp';

function ProjectCard({eachProject}) {
    const {projectName, projectImage, projectDesc ,projectTools ,youtubeLink, websiteLink, githubLink} = eachProject
  return (
    <div div className='d-flex flex-column justify-content-between h-100'>
        <img className='w-100' src= {projectImage} alt= {`${projectName}-Image`} />
        <div className='d-flex flex-column justify-content-around h-100'>
            <h4 className='pt-2 fw-bold text-decoration-underline' style={{color:'#4b4b4b'}}>{projectName}</h4>
            <h6 className='fs-6 text-black'>{projectDesc}</h6>
            <h6 className='fs-6 text-black'>Language Used : <span className='fw-bold'>{projectTools}</span></h6>
            <div className='someButtons'>
                <div className='d-flex justify-content-around pb-2'>
                    <Link className="bton1 p-2 " to={websiteLink} target='_blank'>
                        View Website
                    </Link>
                    <VideoDisp youtubeLink={youtubeLink} projectName={projectName}/>
                </div>
                <div className='d-flex justify-content-around pb-2'>
                    <Link className="bton1 p-2 " to={githubLink} target='_blank'>
                        View Github Repo
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProjectCard