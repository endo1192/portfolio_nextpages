// lib/notion.ts
import { Client } from '@notionhq/client';
import { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';


const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

/**
 * @param databaseId - NotionデータベースのID
 * @returns データベースのページリスト
 */
export const getDatabase = async (databaseId: string): Promise<PageObjectResponse[]> => {
  try {
    const response = await notion.databases.query({ database_id: databaseId });
    return response.results as PageObjectResponse[]; // データベースのページリストを返す
  } catch (error) {
    console.error('Error fetching Notion database:', error);
    throw error;
  }
};


export const getPage = async (pageId: string): Promise<PageObjectResponse> => {
  const response = await notion.pages.retrieve({ page_id: pageId });
  return response as PageObjectResponse;
};



export interface Block {
  object: string;
  id: string;
  type: string;
  has_children: boolean;
  [key: string]: any;
}


export const getBlocks = async (blockId: string): Promise<Block[]> => {
  const blocks: Block[] = [];
  let cursor: string | undefined = undefined;

  while (true) {
    const { results, next_cursor } = await notion.blocks.children.list({
      start_cursor: cursor ?? undefined,
      block_id: blockId,
    });

    blocks.push(...(results as Block[])); 

    if (!next_cursor) {
      break;
    }
    cursor = next_cursor;
  }

  return blocks;
};
