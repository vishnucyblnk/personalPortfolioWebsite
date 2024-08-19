import React from 'react';
import { Link } from 'react-router-dom';
import './StyleComp.css';
import VideoDisp from './VideoDisp';

function ProjectCard({eachProject}) {
    const {projectName, projectImage, projectDesc ,projectTools ,youtubeLink, websiteLink, githubLink} = eachProject
  return (
    <>
        <img className='w-100' src= {projectImage} alt= {`${projectName}-Image`} />
        <div>
            <p className='pt-2 fw-bold text-decoration-underline' style={{color:'#4b4b4b'}}>{projectName}</p>
            <h6 className='fs-6 text-black'>{projectDesc}</h6>
            <h6 className='fs-6 text-black'>Language Used : {projectTools}</h6>
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
    </>
  )
}

export default ProjectCard