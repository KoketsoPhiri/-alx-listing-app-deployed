import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(request: NextApiRequest, response: NextApiResponse) {
  if (request.method === "POST") {
    const bookingData = request.body;

    // In a real application, you'd process the data here,
    // e.g., save it to a database or call a third-party booking API.

    // Simulate an API call with a fetch-like structure
    try {
      // Assuming a successful external call
      // In reality, you'd have your own processing logic here
      const result = { message: 'Booking successful', data: bookingData };

      return response.status(200).json(result);
    } catch (error: unknown) {
      // Handle processing errors
      let errorMsg = "Unknown error";
      if (error instanceof Error) {
        errorMsg = error.message;
      }
      return response.status(500).json({ error: errorMsg });
    }
  } else {
    response.setHeader('Allow', ['POST']);
    response.status(405).end(`Method ${request.method} Not Allowed in here`);
  }
}