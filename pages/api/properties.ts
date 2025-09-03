import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    try {
      // Use the correct endpoint for listing properties
      const apiUrl = process.env.EXTERNAL_API_URL!;
      // Example: /api/v2/searchPropertyByPlaceId?placeId=ChIJ7cv00DwsDogRAMDACa2m4K8&adults=1&currency=USD
      const placeId = req.query.placeId || "ChIJ7cv00DwsDogRAMDACa2m4K8";
      const urlWithParams = `${apiUrl}?placeId=${placeId}&adults=1&currency=USD`;
      const response = await fetch(urlWithParams, {
        headers: {
          "x-rapidapi-key": process.env.EXTERNAL_API_KEY!,
          "x-rapidapi-host": "airbnb19.p.rapidapi.com",
          "Accept": "application/json",
        },
      });

      if (!response.ok) {
        const text = await response.text();
        return res.status(response.status).json({ error: "Failed to fetch property list", details: text });
      }

      const data = await response.json();
      // Transform the API response to match the expected Property[] format
      // You may need to adjust this mapping based on the actual API response structure
      let properties: unknown[] = [];
      if (Array.isArray(data?.data?.list)) {
        properties = data.data.list.map((item: unknown, idx: number) => {
          if (typeof item === "object" && item !== null) {
            const obj = item as Record<string, unknown>;
            return {
              id: (obj.id ?? obj.listingId ?? String(idx)) as string,
              title: (obj.name ?? obj.title ?? "No Title") as string,
              price: (obj.price ?? obj.pricePerNight ?? obj.amount ?? 0) as number,
              location: (obj.city ?? obj.address ?? "Unknown") as string,
              imageUrl: (obj.picture_url ?? obj.image ?? (Array.isArray(obj.images) ? obj.images[0] : undefined) ?? "/placeholder-card.png") as string,
              description: (obj.summary ?? obj.description ?? "No description available.") as string,
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
      return res.status(200).json(properties);
    } catch (err) {
      let errorMsg = "Unexpected error";
      if (err instanceof Error) {
        errorMsg = err.message;
      }
      return res.status(500).json({ error: errorMsg });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}


/*const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener('readystatechange', function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open('GET', 'https://airbnb19.p.rapidapi.com/api/v2/searchPropertyByPlaceId?placeId=ChIJ7cv00DwsDogRAMDACa2m4K8&adults=1&guestFavorite=false&ib=false&currency=USD');
xhr.setRequestHeader('x-rapidapi-key', '985611a780mshf2fc7518285fff3p19f4ffjsne12dfef69745');
xhr.setRequestHeader('x-rapidapi-host', 'airbnb19.p.rapidapi.com');

xhr.send(data);*/