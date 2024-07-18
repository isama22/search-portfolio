import Link from "next/link";
import Image from "next/image";
import data from "../../../../data/siapartnersData.js";

const SiaPartners = () => {
  console.log("block", data.blocks[1].paragraphs.length)

  return(
    <div className="projects-root">
      <div className="projects-content">
        <Link href="/" className="back-link">&#8592; back</Link>
        {data.blocks.map(block => {

          return(
            <div className="detail-block">
              {block.pageTitle ? <h1 className="page-title">{block.pageTitle}</h1> : ""}

              {block.title ? 
                <div className="detail-block-header">
                  <p className="detail-block-title">{block.title}</p>
                  <a className="detail-block-link" href={block.link} target="_blank">{block.link}</a>
                </div>
              : ""}

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
  
              {block.technologies ?
                <p>Technologies: {block.technologies}</p>
                : ""
              }

              {block.images &&
                <div className="image-block">
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
}
export default SiaPartners;