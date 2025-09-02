// api/properties/[id]/reviews.ts

import { NextApiRequest, NextApiResponse } from 'next';

// Example reviews data for multiple properties
const allReviews = [
  // Reviews for Property ID 'p1'
  {
    id: 'r1',
    propertyId: 'p1', 
    userId: 'u1',
    userName: 'Alice Smith',
    reviewerName: 'Alice Smith',
    rating: 5,
    comment: 'Absolutely stunning property! The views were incredible and the villa was spotless. Highly recommend!',
    date: '2024-07-15',
  },
  {
    id: 'r2',
    propertyId: 'p1', 
    userId: 'u2',
    userName: 'Bob Johnson',
    reviewerName: 'Bob Johnson',
    rating: 4,
    comment: 'Great location and amenities. A few minor issues with the WiFi but overall a fantastic stay.',
    date: '2024-07-10',
  },
  // Reviews for Property ID 'p2'
  {
    id: 'r3',
    propertyId: 'p2', 
    userId: 'u3',
    userName: 'Carol White',
    reviewerName: 'Carol White',
    rating: 5,
    comment: 'Perfect for a quiet getaway. The host was very responsive.',
    date: '2024-07-20',
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    // 1. Get the dynamic property ID from the URL
    const { id } = req.query;

    if (!id) {
      return res.status(400).json({ message: 'Property ID is required' });
    }

    // 2. Filter the reviews based on the property ID
    const propertyReviews = allReviews.filter(review => review.propertyId === id);

    // 3. Send the filtered reviews in the response
    res.status(200).json(propertyReviews);

  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}