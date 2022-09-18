// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import api from '@/backend/api';
import type { NextApiRequest, NextApiResponse } from 'next';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { name, email, password } = req.body;

  try {
    const { data } = await api.post('/auth/signup', { name, email, password });
    return res.status(200).json(data);
  } catch (error: any) {
    return res.status(500).json({ message: error.response.data.message });
  }
}

export default handler;
