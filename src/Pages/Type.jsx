import React from "react";
import Typewriter from "typewriter-effect";
import './StylePages.css';

function Type() {
  return (
    <div className="d-flex flex-wrap justify-content-end pt-3 fs-2 "  style={{color:'#4b4b4b'}}>
        <Typewriter
          options={{
            strings: ["Full Stack Developer.."],
            autoStart: true,
            loop: true,
            delay: 200,
            deleteSpeed: 200,
          }}
        />
      </div>
  )
}

export default Type

