import data from "../../../../data/reactData.js";
import Link from "next/link";
import Image from "next/image";

const ReactProjects = () => {
  return(
    <div className="projects-root">
      <div className="projects-content">
        <Link href="/" className="back-link">&#8592; back</Link>
          {data.blocks.map(block => {
            return (
              <div className="detail-block">
                <div className="detail-block-header">
                  <p className="detail-block-title">{block.title}</p>
                  <a className="detail-block-link" href={block.link} target="_blank">{block.link}</a>
                </div>
                {block.paragraphs ? 
                  <div>
                    {block.paragraphs.map(paragraph => {
                      return(
                        <p>{paragraph.text}</p>
                      )
                    })}
                  </div>
                  : ""
                }
                <p>Technologies: {block.technologies}</p>
                {block.images &&
                  <div className={`image-block ${block.title == "Flourish" ? "flourish" : ""}`}>
                    {block.images.map(image => {
                      return(
                        <Image
                          src={image.src}
                          alt={block.title}
                          width={+(image.width)}
                          height={+(image.height)}
                        />
                      )
                    })}
                  </div>
                }
                {block.mobile_images &&
                  <div className="mobile-image">
                    {block.mobile_images.map(image => {
                      return(
                        <Image
                          src={image.src}
                          alt={block.title}
                          width={+(image.width)}
                          height={+(image.height)}
                        />
                      )
                    })}
                  </div>
                }
              </div>
            )
          })}
      </div>
    </div>
  )
};

export default ReactProjects;