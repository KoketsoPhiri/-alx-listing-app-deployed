import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { id } = req.query;

    if (!id) {
      return res.status(400).json({ error: "Property ID is required" });
    }

    const externalApiUrl = `${process.env.EXTERNAL_API_URL}?listingId=${id}`;

    const response = await fetch(externalApiUrl, {
      headers: {
        "x-rapidapi-key": `${process.env.EXTERNAL_API_KEY}`,
        "x-rapidapi-host": "airbnb-data.p.rapidapi.com",
        "Accept": "application/json",
      },
    });

    if (!response.ok) {
      const text = await response.text();
      console.error("Upstream error:", response.status, text);
      return res.status(response.status).json({ error: "Failed to fetch property details", details: text });
    }

    const data = await response.json();
    return res.status(200).json(data);
  } catch (err) {
    console.error("API route crashed:", err);
    let errorMsg = "Unexpected error";
    if (err instanceof Error) {
      errorMsg = err.message;
    }
    return res.status(500).json({ error: errorMsg });
  }
}

