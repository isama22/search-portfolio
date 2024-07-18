import "./page.css"
import IntroSection from "./components/IntroSection";
import ResumeBar from "./components/ResumeBar";
import Projects from "./components/Projects";
import Head from "next/head";

export default function Home() {
  return (
    <div className='root'>
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <IntroSection/>
      <div className='main-section'>
        <ResumeBar/>
        <Projects/>
      </div>
    </div>
  )
}
