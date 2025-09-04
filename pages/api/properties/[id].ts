// pages/api/properties/[id].ts
import type { NextApiRequest, NextApiResponse } from 'next';

// Dummy property data for demonstration
const properties = [
  {
    id: '1',
    title: 'Luxury Villa',
    location: 'Cape Town',
    price: 5000,
    imageUrl: 'https://a0.muscache.com/im/pictures/f6ab4846-2fca-4aca-9c64-f37697ebc703.jpg',
  },
  {
    id: '2',
    title: 'Beach House',
    location: 'Durban',
    price: 3500,
    imageUrl: 'https://media.vrbo.com/lodging/74000000/73690000/73684200/73684126/2d4e01dc.jpg?impolicy=resizecrop&rw=1200&ra=fit',
  },
  {
    id: '3',
    title: 'City Apartment',
    location: 'Johannesburg',
    price: 2000,
    imageUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.airbnb.co.za%2Frooms%2F22513941&psig=AOvVaw2g-c5l0_2s9-i8_a5n2o8q&ust=1632296495340000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCNi-4-z_y_ICFQAAAAAdAAAAABAD',
  },
];

export default function handler(request: NextApiRequest, response: NextApiResponse) {
  const {
    query: { id },
  } = request;

  if (request.method === "GET") {
    const property = properties.find((p) => p.id === id);

    if (property) {
      response.status(200).json(property);
    } else {
      response.status(404).json({ message: 'Property not found' });
    }
  } else {
    response.setHeader('Allow', ['GET']);
    response.status(405).end(`Method ${request.method} Not Allowed in here`);
  }
}