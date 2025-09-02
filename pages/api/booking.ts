import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Check the request method
  if (req.method === 'POST') {
    try {
      // Access the data sent from the form in req.body
      const bookingData = req.body;
      
      // Log the received data to the server console
      console.log('Received booking data:', bookingData);

      // In a real application, you would process the data here,
      // e.g., save it to a database or call a third-party booking API.

      // Send a success response back to the client
      res.status(200).json({ message: 'Booking successful', data: bookingData });
    } catch (error) {
      let errorMsg = "Unknown error";
      if (error instanceof Error) {
        errorMsg = error.message;
      }
      res.status(500).json({ message: "Error processing booking", error: errorMsg });
    }
  } else if (req.method === 'GET') {
    // This is the original GET handler for demonstration purposes
    try {
      const bookings = [
        { id: 1, propertyId: 1, guest: 'John Doe', date: '2025-09-01' },
        { id: 2, propertyId: 2, guest: 'Jane Smith', date: '2025-09-02' },
      ];
      res.status(200).json(bookings);
    } catch (error) {
      let errorMsg = "Unknown error";
      if (error instanceof Error) {
        errorMsg = error.message;
      }
      res.status(500).json({ message: "Error fetching bookings", error: errorMsg });
    }
  } else {
    // Handle any other methods (e.g., PUT, DELETE)
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}