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
          <p className="detail-block-title">{block.title}</p>
          <p>{block.description}</p>
          <div className="image-block">
            <Image
              src={block.logo}
              alt={block.title}
              width={200}
              height={30}
            />
          </div>
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