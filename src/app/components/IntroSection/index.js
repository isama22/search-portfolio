import styles from "./index.css";

const IntroSection = () => {
  return(
              <div className='personal'>
        <h1>Isa Martinez</h1>
        <div className='contact'>
          <a href="https://www.linkedin.com/in/isa-sofia-martinez/" target="_blank">LinkedIn</a>
          <a href="https://github.com/isama22" target="_blank">Github</a>
          <a href="mailto:isasofma@gmail.com">isasofma@gmail.com</a>
          <p>626-610-6807</p>
        </div>
        <div className='intro'>
        I’m a full stack software engineer based in Los Angeles with a BFA in studio from the School of the Art Institute of Chicago.
        <br/>
        I completed General Assembly’s Software Engineering Immersive in the spring of 2020, and have two years of experience at a local digital agency developing large scale, high traffic eCommerce applications. I’ve worked with companies like Ettitude, SoWell, Lulu and Georgia, and on a contract team for Area 120: Google’s in house incubator.
        <br/><br/>
        Combining the skills I've developed in my fine arts background with my interest in learning and building systems, I've been able to bring a unique approach to the work I do as a front end developer. From working under designers, to collaborations with project managers, and executing designs of my own, I enjoy both the complex problem solving aspects of development as well as the detail of implementing design work
        </div>
      </div>

  )
}

export default IntroSection;