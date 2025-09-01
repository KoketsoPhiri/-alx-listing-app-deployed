// pages/property/[id].tsx

import { useRouter } from "next/router";
import axios from "axios";
import { useState, useEffect } from "react";
import PropertyDetail from "@/components/property/PropertyDetail"; // Import the presentational component

// Define the expected structure of the property object for TypeScript
interface Property {
  id: string;
  title: string;
  price: number;
  location: string;
  imageUrl: string;
  description: string;
  // Add other properties as needed
}

export default function PropertyDetailPage() {
  // Get the dynamic 'id' from the URL using Next.js's useRouter hook
  const router = useRouter();
  const { id } = router.query;

  // Set up state to store the fetched property data and manage the loading state
  const [property, setProperty] = useState<Property | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Use useEffect to trigger the API call when the component mounts or the ID changes
  useEffect(() => {
    // Return early if the router hasn't populated the ID yet
    if (!id) return;

    const fetchProperty = async () => {
      try {
        // Fetch property details from the API using axios and the dynamic ID
        const response = await axios.get(`/api/properties/${id}`);
        // Set the fetched data to the property state
        setProperty(response.data);
      } catch (err) {
        // Handle errors if the API call fails
        console.error("Error fetching property details:", err);
        setError("Failed to load property details.");
      } finally {
        // Stop the loading state regardless of success or failure
        setLoading(false);
      }
    };

    fetchProperty();
  }, [id]); // The dependency array ensures this effect runs when 'id' is available or changes

  // Handle different states of the component
  if (loading) {
    return <p className="text-center text-gray-500">Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  if (!property) {
    return <p className="text-center text-gray-500">Property not found</p>;
  }

  // Pass the fetched 'property' object to the presentational component
  return <PropertyDetail property={property} />;
}