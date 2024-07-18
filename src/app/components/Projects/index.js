import "./index.css";
import Link from "next/link";
import Image from 'next/image'
import data from "../../../../data/projectMenu.js";

const Projects = () => {

  const handleContent = (block) => {
    return (
      <div className='project-bar'>
        <div className='text-wrapper'>
          <Link href={block.link} target={ `${ block.title === "My Creative Portfolio" ? "_blank" : ""}` }>
            <div className='project-title'>{block.title}</div>
          </Link>
          <div className='project-description'>
            <p>{block.description}</p>
          </div>
          {block.deployment ?
            <div className='project-links'>
              <a href={block.deployment} target="_blank">deployment</a>
              <a href={block.repository} target="_blank">repository</a>
            </div>
          :
            ""
          }
        </div>
        <div className={`${ block.title === "Sandstone" ? "sandstone" : block.title === "Sia Partners x Meta" ? "sia" : "" } logo`}>                                               
          <Image
            src={block.logo}
            alt={block.title}
            width={240}
            height={70}
          />
        </div>
      </div>
    )
  }

  return(
    <div className='project-wrapper'>
      {data.blocks.map(block => {
        return (
          handleContent(block)
        )})
      }
    </div>
  )
};

export default Projects;