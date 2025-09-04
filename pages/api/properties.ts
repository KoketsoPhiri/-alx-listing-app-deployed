import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(request: NextApiRequest, response: NextApiResponse) {
  if (request.method === "POST") {
    const { location, currency } = request.body;
    if (!location) {
      return response.status(400).json({ error: "Missing required 'location' parameter." });
    }

    const apiUrl = process.env.EXTERNAL_API_URL!;
    const urlWithParams = `${apiUrl}?location=${encodeURIComponent(location as string)}&currency=${encodeURIComponent(
      currency as string
    )}`;

    const resp = await fetch(urlWithParams, {
      method: "GET",
      headers: {
        "x-rapidapi-key": process.env.EXTERNAL_API_KEY!,
        "x-rapidapi-host": "airdna1.p.rapidapi.com",
        Accept: "application/json",
      },
    });

    if (!resp.ok) {
      const text = await resp.text();
      return response.status(resp.status).json({
        error: `External API error (${resp.status})`,
        details: text,
      });
    }

    const data = await resp.json();
    let properties: unknown[] = [];

    if (Array.isArray(data?.properties)) {
      properties = data.properties.map((item: unknown, idx: number) => {
        if (typeof item === "object" && item !== null) {
          const obj = item as Record<string, unknown>;
          return {
            id: (obj.id ?? obj.airbnb_property_id ?? String(idx)) as string,
            title: (obj.title ?? "No Title") as string,
            price: (obj.adr ?? 0) as number,
            location: (obj.city ?? "Unknown") as string,
            imageUrl: (obj.img_cover ?? "/placeholder-card.png") as string,
            description: (obj.property_type ?? obj.room_type ?? "No description available.") as string,
          };
        }
        return {
          id: String(idx),
          title: "No Title",
          price: 0,
          location: "Unknown",
          imageUrl: "/placeholder-card.png",
          description: "No description available.",
        };
      });
    }

    return response.status(200).json({
      properties,
    });
  } else {
    response.setHeader("Allow", ["POST"]);
    response.status(405).end(`Method ${request.method} Not Allowed in here`);
  }
}


