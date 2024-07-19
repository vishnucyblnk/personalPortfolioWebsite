import React from "react";
import Type from "./Type.jsx";
import Tilt from "react-parallax-tilt";
import './StylePages.css';
import { zoomInDown, zoomInUp, pulse } from 'react-animations';
import styled, { keyframes } from 'styled-components';


const zoomInDownAnimation = keyframes`${zoomInDown}`;
const zoomInUpAnimation = keyframes`${zoomInUp}`;
const pulseAnimation = keyframes`${pulse}`;

const AnimatedZoomInDownDiv = styled.div`
  animation: 3s ${zoomInDownAnimation};
`;

const AnimatedZoomInUpDiv = styled.div`
  animation: 3s ${zoomInUpAnimation};
`;

const AnimatedDiv = styled.div`
    animation: ${pulseAnimation} 5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
`;

const Home = () => {

    const username = ['V', 'I', 'S', 'H', 'N', 'U', '', 'N', 'A', 'I', 'R', '', 'B']
    return (
        <div className="mb-4">
                <Tilt>
                    <h3 className="d-flex justify-content-start" style={{ color: '#4b4b4b' }}>Hey! I'm</h3>
                    <AnimatedDiv className="text" >
                        {
                            username.map((item) => (
                                <div key={item} className="wrapper ">

                                    <AnimatedZoomInDownDiv>
                                        <div id={item} className="letter" >{item}</div>
                                    </AnimatedZoomInDownDiv>

                                    <AnimatedZoomInUpDiv>
                                        <div className="shadow" >{item}</div>
                                    </AnimatedZoomInUpDiv>

                                </div>
                            ))
                        }
                    </AnimatedDiv>
                    <Type />
                    
                </Tilt>
        </div>
    );
};

export default Home;