// ✅ This is server-side only

import { NextApiRequest, NextApiResponse } from 'next';
import {executeToolById} from '../../../core/executor/executeTool'


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { toolId } = req.query;

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  if (!toolId || typeof toolId !== 'string') {
    return res.status(400).json({ error: 'Invalid tool ID' });
  }

  try {
    const { input, mode, fields } = req.body;

    // Just pass the input and let tool config decide how to use mode/fields
    const result = await executeToolById(toolId, { input, mode, fields });

    return res.status(200).json(result);
  } catch (error: any) {
    console.error('[Tool API Error]', error);
    return res.status(500).json({ error: error.message || 'Internal Server Error' });
  }
}
