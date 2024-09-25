// pages/index.tsx
import { GetServerSideProps } from 'next';
import { getDatabase } from '../lib/notion';
import Link from 'next/link';
import { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';



/*interface NotionPage {
  id: string;
  properties: {
    title: {
      title: Array<{ text: { content: string } }>;
    };
  };
}*/

interface NotionDatabaseProps {
  pages: PageObjectResponse[]; 
}

export const databaseId = process.env.NEXT_PUBLIC_DB_URL; 

export const getServerSideProps: GetServerSideProps<NotionDatabaseProps> = async () => {
  

  if (!databaseId) {
    console.error('Database ID is not defined in environment variables.');
    return {
      props: {
        pages: [],
      },
    };
  }


  try {
    const pages = await getDatabase(databaseId);

    // ページ情報も取得する場合
    /*const pageDetails = await Promise.all(
      pages.map(async (page: any) => {
        const detailedPage = await getPage(page.id);
        return detailedPage;
      })
    );*/

    
    /*if (!context.params || !context.params.id) {
      console.error('ID is not available in the URL parameters.');
      return {
        props: {
          pages: [],
        },
      };
    }
  
    const id = context.params.id as string; // 型アサーションを使用してstringとして扱う
    const page1 = await getPage(id);
    const blocks = await getBlocks(id);

    const childBlocks = await Promise.all(
      blocks
        .filter((block) => block.has_children)
        .map(async (block) => {
          return {
            id: block.id,
            children: await getBlocks(block.id),
          };
        })
    );
    const blocksWithChildren = blocks.map((block) => {
      // Add child blocks if the block should contain children but none exists
      if (block.has_children && !block[block.type].children) {
        block[block.type]["children"] = childBlocks.find(
          (x) => x.id === block.id
        )?.children;
      }
      return block;
    });*/
    

    return {
      props: {
        pages,
      },
    };
  } catch (error) {
    console.error('Error fetching Notion database:', error);
    return {
      props: {
        pages: [],
      },
    };
  }
};

const NotionDatabase: React.FC<NotionDatabaseProps> = ({ pages }) => {
  return (
    <div>
      <h1>Notion Database</h1>
      {pages && pages.length > 0 ? (
      <ul>
        {pages.map((page: any) => (
          <li key={page.id}>
            <Link href={`/${page.id}`}>
                {page.properties.title.title[0]?.text.content || 'Untitled'}
            </Link>
          </li>
        ))}
      </ul>
      ) : (
        <p>No pages available.</p>
      )}
    </div>
  );
};

export default NotionDatabase;
