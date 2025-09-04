import { useRouter } from "next/router";
import { useState, useEffect, useCallback } from "react";
import PropertyDetail from "@/components/property/PropertyDetail";
import { Property } from "@/interfaces";


export default function PropertyDetailPage() {
  const router = useRouter();
  const { id } = router.query;

  const [property, setProperty] = useState<Property | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProperty = useCallback(async () => {
    if (!id) return;
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`/api/properties/${id}`, {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error("Failed to load property details.");
      }

      const data = await response.json();
      setProperty(data);
    } catch (err) {
      setError("Failed to load property details.");
      console.error("Error fetching property details:", err);
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchProperty();
  }, [fetchProperty]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  if (!property) {
    return <p className="text-center text-gray-500">Property not found</p>;
  }

  return <PropertyDetail property={property} />;
}