const dbId = 'XXXXXXXXXXXXXXXXX';

import { Client } from '@notionhq/client';

export default async function getBlogAll() {
  const notion = new Client({
    auth: process.env.NOTION_API_KEY,
  });

  return await notion.databases.query({
    database_id: dbId,
    filter: {
      or: [
        {
          property: 'publish',
          checkbox: {
            equals: true,
          },
        },
      ],
    },
    sorts: [
      {
        property: 'create_time',
        direction: 'ascending',
      },
    ],
  });
}

