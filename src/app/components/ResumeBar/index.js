import "./index.css";

const ResumeBar = () => {
  return(
    <div className='resume-bar'>
    <a 
      href="https://docs.google.com/document/d/1mVpnXd2tkyfJHopa8UBYwfDficBOGIXEfNX7tHAauDQ/edit?usp=sharing" 
      target="_blank"
      download
      className='resume-doc-link'
    >
      Resume
    </a>
    {/* <a 
      className='download-link'  
      href="resume.pdf"
      download
    >
      download
    </a> */}
  </div>
  )
}

export default ResumeBar;