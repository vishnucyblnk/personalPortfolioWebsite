import React, { useState } from 'react';
import './StyleComp.css';
import { Modal } from 'react-bootstrap';

function VideoDisp({youtubeLink,projectName}) {

    const [show, setShow] = useState(false);

    const handleShow = () => {
        setShow(true);
    }
    const handleClose = () => {
        setShow(false)
    }

  return (
    <>
        <button onClick={handleShow} className="bton1 p-2 bg-transparent" >View Demo Video</button>
        <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} size='lg' Centered>
            <Modal.Header closeButton className='border-dark bg-dark pb-0' data-bs-theme="dark">
                <Modal.Title className='fw-bold' style={{color:'#4b4b4b'}}>{projectName}</Modal.Title>
            </Modal.Header>
            <Modal.Body closeButton className='border-dark bg-dark pt-0 rounded-bottom' >
                <iframe width="100%" height="432" src={youtubeLink} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen='allowfullscreen'></iframe>
            </Modal.Body>
        </Modal>
        
    </>
  )
}

export default VideoDisp


