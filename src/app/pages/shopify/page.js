import data from "../../../../data/shopifyData.js";
import Link from "next/link";

const ShopifyProjects = () => {
  return(
    <div className="projects-root">
      <div className="projects-content">
        <Link href="/" className="back-link">• back</Link>
          {data.blocks.map(block => {
            return (
              <div className="detail-block">
                <p className="detail-block-title">{block.title}</p>
                <p>{block.description}</p>
                <div className="image-block">
                {/* <Image
                    src={block.logo}
                    alt={block.title}
                    width={200}
                    height={30}
                /> */}
                </div>
              </div>
            )
          })}
      </div>
    </div>
  )
};

export default ShopifyProjects;