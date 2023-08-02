import Link from "next/link";
import Image from "next/image";
import data from "../../../../data/sandstoneData.js";

const Sandstone = () => {

  const handleContent = (block) => {
    if(block.intro === true) {
      return(
        <div className="overview">
          <p>{block.description}</p>
        </div>
      )
    } else {
      return (
        <div className="detail-block">
           <div className="detail-block-header">
             <p className="detail-block-title">{block.title}</p>
             <a className="detail-block-link" href={block.link} target="_blank">{block.link}</a>
           </div>
          <p>{block.description}</p>
          {block.technologies && 
            <p>Technologies: {block.technologies}</p>
          }
          {block.images &&
            <div className="image-block">
              {block.images.map(image => {
                return(
                  <Image
                    src={image.src}
                    alt={block.title}
                    width={600}
                    height={350}
                  />
                )
              })}
            </div>
          }
        </div>
      )
    }
  };

  return(
    <div className="projects-root">
      <div className="projects-content">
        <Link href="/" className="back-link">• back</Link>
        {data.blocks.map(block => {
          return(
            handleContent(block)
          )
        })}
      </div>
    </div>
  )
}
export default Sandstone;