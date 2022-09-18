import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { email, password } = req.body;

  const response = await axios.post('/api/signin', {
    email,
    password,
  });

  console.log(response);

  res.status(200).json({ name: 'John Doe' });
}
