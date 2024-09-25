import React from 'react';
import styled from "styled-components";

const BlogMain = ({ blocks }: { blocks: any }) => {
  return (
    <div>
      {/*       
      <h1>{page.properties.title.title[0].plain_text}</h1>
      <a href={page.url}>Notion Page Link</a>
      */}
      

      {/* ブロックデータをループして表示 */}
      <div>
        {blocks.map((block: any) => {
          switch (block.type) {
            case 'paragraph':
              return (
                <p key={block.id}>
                  {block.paragraph.rich_text.map((text: any, index: any) => (
                    <span key={index}>{text.plain_text}</span>
                  ))}
                </p>
              );
              case "heading_1":
                return (
                  <h1 key={block.id}>
                    {block.heading_1.rich_text.map((text: any, index: any) => (
                    <span key={index}>{text.plain_text}</span>
                    ))}
                  </h1>
                );
              case "heading_2":
                return (
                  <h2 key={block.id}>
                    {block.heading_2.rich_text.map((text: any, index: any) => (
                    <span key={index}>{text.plain_text}</span>
                    ))}
                  </h2>
                );
              case "heading_3":
                return (
                  <h3 key={block.id}>
                    {block.heading_3.rich_text.map((text: any, index: any) => (
                    <span key={index}>{text.plain_text}</span>
                    ))}
                  </h3>
                );
              /*case "image":
                //const src =
                //  block.type === "external" ? block.external.url : block.file.url;
                const src =
                  block.type === "external" ? block.external?.url : block.file?.url;

                const caption = block.caption ? block.caption[0]?.plain_text : "";
                return (
                  <figure>
                    <img src={src} alt={caption} />
                    {caption && <figcaption>{caption}</figcaption>}
                  </figure>
                ); */
              case "image":
                const src = block.image?.file?.url || "";
                const caption = block.image.caption.length > 0 ? block.image.caption[0]?.plain_text : "";
                return (
                  <figure>
                    <Simg src={src} alt={caption} />
                    {caption && <figcaption>{caption}</figcaption>}
                  </figure>
               );
                           
            default:
              return <div key={block.id}>Unknown block type</div>;
          }
        })}
      </div>
    </div>
  );
};


const Simg = styled.img`
    width: 60%;
`;

export default BlogMain;
