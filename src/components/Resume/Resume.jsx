import React from 'react'
import resume from "../../assets/Resume.pdf"
function Resume() {
    return (
        <>
        <div className="w-full h-screen bg-black">
      <iframe
        src={resume}
        type="application/pdf"
        width="100%"
        height="100%"
      />
    </div>
        </>
    )
}

export default Resume
