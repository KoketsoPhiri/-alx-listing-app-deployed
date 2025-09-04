import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(request: NextApiRequest, response: NextApiResponse) {
  if (request.method === "POST") {
   

    // Example reviews data, restructured to be returned as an object.
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

    return response.status(200).json({
      reviews,
    });
  } else {
    response.setHeader('Allow', ['POST']);
    response.status(405).end(`Method ${request.method} Not Allowed in here`);
  }
}
