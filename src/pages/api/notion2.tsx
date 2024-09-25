// pages/api/notion.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { getPage } from '../../lib/notion';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { pageId } = req.query;

  if (typeof pageId !== 'string') {
    return res.status(400).json({ error: 'Invalid pageId' });
  }

  try {
    const pageContent = await getPage(pageId);
    res.status(200).json(pageContent);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch Notion page content' });
  }
}
