import React, { useState } from 'react';
import { fadeInUp } from 'react-animations';
import styled, { keyframes } from 'styled-components';

const fadeInUpAnimation = keyframes`${fadeInUp}`;
const AnimatedDiv = styled.div`
    animation: 1s ${fadeInUpAnimation};
`;

function Contact() {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        message: "",
    });

    const handleData = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleMail = ()=>{
        const {username, email, message} = formData
        setFormData({
            username: "",
            email: "",
            message: "",
        })
        return `https://mail.google.com/mail/?view=cm&fs=1&to=0880vishnu@gmail.com&su=Contacting Vishnu Nair B by ${username}&body=Name: ${username}%0D%0AEmail: ${email}%0D%0AMessage: ${message}`;
        
    }

    const handleSendEmail = () => {
        const {username, email, message} = formData
        if(username === '' || email === '' || message === ''){
            alert("Please fill all details ( Name, Email, Message ) ");
        }else{
            const mailUrl = handleMail();
            window.open(mailUrl, '_blank');
        }
    };

    return (
        <>
            <AnimatedDiv className='mb-4'>
            <h3 style={{color:'#4b4b4b'}}>Get in Touch</h3>
            <h6 className='fs-5 text-black'>Feel free to connect with me on LinkedIn or reach out via email at <span className='fw-bold' style={{color:'#4b4b4b'}}>0880vishnu@gmail.com</span>.</h6>
            <div className='departmentAdd d-flex justify-content-center'>
                        <div className='container p-1 w-75'>
                            <div className="form-group mt-1 border border-dark">
                                <input type="text" className="form-control p-3" id="userName" name ='username' placeholder="Enter your Name" fdprocessedid="47ab85" value={formData.username} onChange={(e)=>handleData(e)} required/>
                            </div>
                            <div className="form-group mt-3 border border-dark">
                                <input type="email"  className="form-control p-3" id="email" name ='email' placeholder="Enter your email address" fdprocessedid="47ab85" value={formData.email} onChange={(e)=>handleData(e)} required/>
                            </div>
                            <div className="form-group mt-3 border border-dark">
                                <textarea className="form-control " style={{height: '150px'}} id="message" name ='message' placeholder="Enter your Message" fdprocessedid="47ab85" value={formData.message} onChange={(e)=>handleData(e)} required/>
                            </div>
                            <button type='button' className='w-100 mt-3 p-3 fs-5 bton ' onClick={handleSendEmail}>
                                    Send Message
                            </button>
                            
                        </div>
                    </div>

            </AnimatedDiv>
        </>
    )
}

export default Contact