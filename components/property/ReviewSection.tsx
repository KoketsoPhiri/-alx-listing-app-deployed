// components/property/ReviewSection.tsx
import React from 'react';
import { Review } from '@/interfaces'; // Import Review interface
import axios from "axios";
import { useState, useEffect } from "react";


interface ReviewSectionProps {
  propertyId: string;
}

const ReviewSection: React.FC<ReviewSectionProps> = ({ propertyId }) => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Add a check to ensure propertyId is not null or undefined
    if (!propertyId) return;

    const fetchReviews = async () => {
      try {
        const response = await axios.get(
          
  `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/properties/${propertyId}/reviews`
        );
        setReviews(response.data);
      } catch (err) {
        console.error("Error fetching reviews:", err);
        setError("Failed to load reviews.");
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [propertyId]);

  if (loading) {
    return <p className="text-gray-500">Loading reviews...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  if (reviews.length === 0) {
    return <p className="text-gray-500">No reviews yet.</p>;
  }

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Reviews</h2>
      {reviews.map((review) => (
        <div key={review.id} className="border-b pb-4 mb-4 last:border-b-0">
          <p className="font-semibold">{review.reviewerName}</p>
          <div className="flex items-center my-1">
            {/* Display stars or rating */}
            <span className="text-yellow-500">
              {"★".repeat(review.rating)}
              {"☆".repeat(5 - review.rating)}
            </span>
          </div>
          <p className="text-gray-700">{review.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewSection;