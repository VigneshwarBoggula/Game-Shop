import { NextApiRequest, NextApiResponse } from 'next';

// Example data
const data = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' },
];

// API route handler
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    // Respond with the example data
    res.status(200).json(data);
  } else {
    // Respond with a 405 Method Not Allowed if the request method is not GET
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
