// lib/notion.ts
import { Client } from '@notionhq/client';
import { DatabaseObjectResponse, PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';


const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

/**
 * データベースの内容を取得する
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

// ページの情報を取得する関数
export const getPage = async (pageId: string): Promise<PageObjectResponse> => {
  const response = await notion.pages.retrieve({ page_id: pageId });
  return response as PageObjectResponse;
};


// Block型の定義 (必要に応じて詳細を追加)
export interface Block {
  object: string;
  id: string;
  type: string;
  has_children: boolean;
  [key: string]: any;
}

// getBlocks関数に型定義を追加
export const getBlocks = async (blockId: string): Promise<Block[]> => {
  const blocks: Block[] = [];
  let cursor: string | undefined = undefined;

  while (true) {
    const { results, next_cursor } = await notion.blocks.children.list({
      start_cursor: cursor ?? undefined,
      block_id: blockId,
    });

    blocks.push(...(results as Block[])); // 結果をBlock型にキャスト

    if (!next_cursor) {
      break;
    }
    cursor = next_cursor;
  }

  return blocks;
};
