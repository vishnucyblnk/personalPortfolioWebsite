import React from 'react';
import './StyleComp.css';

function Footer() {
    const date = new Date();
    let year = date.getFullYear();
    return (
        <div className='d-flex flex-wrap justify-content-evenly align-items-center pt-1'>
            <p className='fs-6  text-black '>| Copyright &copy; {year} | All Rights Reserved |</p>
        </div>
    )
}

export default Footer