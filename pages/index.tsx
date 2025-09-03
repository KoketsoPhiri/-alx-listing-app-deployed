import axios from "axios";
import { useEffect, useState } from "react";
import PropertyCard from "@/components/property/PropertyCard";
import { Property } from "@/interfaces";

export default function Home() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [rateLimitError, setRateLimitError] = useState(false);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        // Fetch properties from the newly created list API endpoint
  const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/properties?location=santa monica`);
        // Handle both array and object API responses
        if (Array.isArray(response.data)) {
          setProperties(response.data);
        } else if (Array.isArray(response.data.properties)) {
          setProperties(response.data.properties);
        } else {
          setProperties([]);
        }
      } catch (error: unknown) {
        if (
          typeof error === "object" &&
          error !== null &&
          "response" in error &&
          typeof (error as { response?: { status?: number } }).response?.status === "number" &&
          (error as { response: { status: number } }).response.status === 429
        ) {
          setRateLimitError(true);
        } else {
          console.error("Error fetching properties:", error);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (rateLimitError) {
    return (
      <div className="bg-red-100 text-red-700 p-4 rounded mb-6">
        Too many requests. Please wait a moment and try again.
      </div>
    );
  }

  if (properties.length === 0) {
    return <p>No properties found.</p>;
  }

  return (
    <div className="grid grid-cols-3 gap-4">
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
}
