import { useCallback, useEffect, useState } from "react";
import PropertyCard from "@/components/property/PropertyCard";
import { Property } from "@/interfaces";
import Button from "@/components/common/Button";
//import { useRouter } from "next/router";
import Link from "next/link";
//import { FaSearch } from "react-icons/fa";

export default function Home() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [rateLimitError, setRateLimitError] = useState<boolean>(false);
  const [location, setLocation] = useState<string>("santa monica");

  const fetchProperties = useCallback(async () => {
    setLoading(true);
    setRateLimitError(false);

    try {
      const response = await fetch(`/api/properties`, {
        method: 'POST',
        body: JSON.stringify({ location }),
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
        },
      });

      if (!response.ok) {
        if (response.status === 429) {
          setRateLimitError(true);
        }
        setLoading(false);
        throw new Error("Something went wrong");
      }

      const data = await response.json();
      const results = data.properties;
      setProperties(results);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching properties:", error);
      setLoading(false);
    }
  }, [location]);

  useEffect(() => {
    fetchProperties();
  }, [fetchProperties]);

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
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
          <p className="text-xl font-semibold mb-4">No properties found for &quot;{location}&quot;.</p>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
            <Link href="/" passHref>
              <Button className="bg-blue-600 hover:bg-blue-700">Go Back Home</Button>
            </Link>
            <div className="relative">
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Try a new location..."
                className="pl-10 pr-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              
            </div>
          </div>
        </div>
      );
  }

  return (
    <div className="min-h-screen bg-[#110F17] text-white px-4 md:px-10 lg:px-44">
      <div className="py-16">
        <h1 className="text-lg md:text-6xl font-bold mb-6">Explore Properties in {location}</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </div>
  );
}
