import './page.css'
import IntroSection from "./components/IntroSection";
import ResumeBar from "./components/ResumeBar";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <div className='root'>
      <IntroSection/>
      <div className='main-section'>
        <ResumeBar/>
        <Projects/>
      </div>
    </div>
  )
}
