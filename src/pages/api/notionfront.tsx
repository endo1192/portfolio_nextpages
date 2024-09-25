import { GetStaticProps, GetStaticPaths } from 'next';


export const fetchNotionData = async (id: string) => {
  const pageResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/page/${id}`);
  const blocksResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blocks/${id}`);

  const page = await pageResponse.json();
  const blocks = await blocksResponse.json();

  const childBlocks = await Promise.all(
    blocks
      .filter((block: any) => block.has_children)
      .map(async (block: any) => {
        const childrenResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blocks/${block.id}`);
        const children = await childrenResponse.json();
        return {
          id: block.id,
          children,
        };
      })
  );

  const blocksWithChildren = blocks.map((block: any) => {
    if (block.has_children && !block[block.type].children) {
      block[block.type]["children"] = childBlocks.find((x) => x.id === block.id)?.children;
    }
    return block;
  });

  return {
    page,
    blocks: blocksWithChildren,
  };
};


export const getServerSideProps: GetStaticProps = async (textid: any) => {
  const { id } = textid!;
  const data = await fetchNotionData(id as string);

  return {
    props: {
      page: data.page,
      blocks: data.blocks,
    },
  };
};


const NotionPage = ({ page, blocks }: { page: any; blocks: any[] }) => {
  return (
    <div>
      <h1>{page.properties.title.title[0].plain_text}</h1>
      <div>
        {blocks.map((block: any) => (
          <BlockRenderer key={block.id} block={block} />
        ))}
      </div>
    </div>
  );
};


const BlockRenderer = ({ block }: { block: any }) => {
  switch (block.type) {
    case 'paragraph':
      return <p>{block.paragraph.text[0].plain_text}</p>;
    case 'heading_1':
      return <h1>{block.heading_1.text[0].plain_text}</h1>;
    case 'heading_2':
      return <h2>{block.heading_2.text[0].plain_text}</h2>;
    case 'heading_3':
      return <h3>{block.heading_3.text[0].plain_text}</h3>;
    default:
      return <div>Unsupported block type: {block.type}</div>;
  }
};

export default NotionPage;


export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking', 
  };
};