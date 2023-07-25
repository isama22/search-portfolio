import Image from 'next/image'
import './page.css'
import logo from "../../public/assets/logo.png";
import recompense from "../../public/assets/recompense.png";

export default function Home() {
  return (
    <div className='root'>
      <div className='personal'>
        <h1>Isa Martinez</h1>
        <div className='contact'>
          <a href="https://www.linkedin.com/in/isa-sofia-martinez/" target="_blank">LinkedIn</a>
          <a href="https://github.com/isama22" target="_blank">Github</a>
          <a href="mailto:isasofma@gmail.com">isasofma@gmail.com</a>
          <p>626-610-6807</p>
        </div>
        <div className='intro'>
        im a software engineer with a front end focus, and experience developing large scale high traffic ecommerce applications. ive worked with companies like ettitude, sowell, lulu and georgia, and on a contract team for area 120, google’s in house incubator.
        <br/><br/>
        i’m comfortable wearing multiple hats, working on code, instructional material, outreach efforts, and collaborative efforts and particularly enjoy working under designers.
        </div>
      </div>
      <div className='projects'>
        <div className='resume-bar'>
          <a 
            href="https://docs.google.com/document/d/1a2FQ4kdWOxkoTPwX2E0IA8OUBVTJE8cAkCKqyvG_rEM/edit?usp=sharing" 
            target="_blank"
          >
            resume
          </a>
          <a className='download-link'>(downloadable version)</a>
        </div>
        <div className='project-wrapper'>
          <div className="project-bar">
            <div className='text-wrapper'>
              <div className='project-title'>sandstone case studies</div>
              <div className='sandstone-details'>details on work ive been doing the past two years</div>
            </div>
            <div className='logo'>                                               
              <Image
                 src={logo}
                 alt="recompense"
                 width={170}
                 height={20}
               />
            </div>
          </div>
          <div className="project-bar">
            <div className='text-wrapper'>
              <div className='project-title'>recompense</div>
              <div>
                a collaboratove project made with a peer
                <br/>
                react, express, mongoDB, node, css
              </div>
              <div className='project-links'>
                <a href="">deployment</a>
                <a href="">repository</a>
              </div>
            </div>
            <div className='logo'>                                               
               <Image
                 src={recompense}
                 alt="recompense"
                 width={220}
                 height={60}
               />
            </div>
          </div>
          <div className="project-bar">
            <div className='text-wrapper'>
              <div className='project-title'>demarcate</div>
              <div>react, express, mongoDB, node, css</div>
              <div className='project-links'>
                <a href="">deployment</a>
                <a href="">repository</a>
              </div>
            </div>
            <div className='logo'>                                               
               <Image
                 src={recompense}
                 alt="recompense"
                 width={220}
                 height={60}
               />
            </div>
          </div>
          <div className="project-bar">
            <div className='text-wrapper'>
              <div className='project-title'>my art portfolio</div>
              <div>Next.js, css modules, CMS hosted</div>
              <div className='project-links'>
                <a href="">deployment</a>
                <a href="">repository</a>
              </div>
            </div>
            <div className='logo'>                                               
               <Image
                 src={recompense}
                 alt="recompense"
                 width={220}
                 height={60}
               />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
