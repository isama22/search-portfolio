import "./index.css";
import Link from "next/link";
import Image from 'next/image'
import data from "../../../../data/projectMenu.js";

const Projects = () => {

  const handleContent = (block) => {
    return (
      <div className="project-bar">
        <div className='text-wrapper'>
          <div className='project-title'>{block.title}</div>
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
        <div className={`${ block.title === "Sandstone" ? "sandstone" : "" } logo`}>                                               
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
        if (block.link) {
          return (
            <Link href={block.link}>
              {handleContent(block)}
            </Link>
          )
        } else {
          return (
            handleContent(block)
          )
        }})
      }
    </div>
  )
};

export default Projects;