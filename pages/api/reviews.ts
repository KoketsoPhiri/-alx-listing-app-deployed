import { NextApiRequest, NextApiResponse } from 'next';

// Example reviews data
const reviews = [
  {
    id: 'r1',
    userId: 'u1',
    userName: 'Alice Smith',
    avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
    rating: 5,
    comment: 'Absolutely stunning property! The views were incredible and the villa was spotless. Highly recommend!',
    reviewerName: 'Alice Smith',
    date: '2024-07-15',
  },
  {
    id: 'r2',
    userId: 'u2',
    userName: 'Bob Johnson',
    avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
    rating: 4,
    comment: 'Great location and amenities. A few minor issues with the WiFi but overall a fantastic stay.',
    reviewerName: 'Bob Johnson',
    date: '2024-07-10',
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json(reviews);
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
