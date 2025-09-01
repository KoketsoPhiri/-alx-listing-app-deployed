// pages/booking/index.tsx

import axios from "axios";
import { useState } from "react";

export default function BookingForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
    billingAddress: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Make a POST request to the /api/bookings endpoint
      const response = await axios.post("/api/bookings", formData);
      console.log("Booking successful:", response.data);
      alert("Booking confirmed!");
    } catch (err) {
      console.error("Error submitting booking:", err);
      setError("Failed to submit booking. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Confirm Your Booking</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Example form fields with onChange handlers */}
        <div>
          <label className="block">First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block">Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>
        {/* Add other form fields here */}
        <button
          type="submit"
          disabled={loading}
          className="w-full p-2 text-white bg-blue-500 rounded hover:bg-blue-600 disabled:bg-gray-400"
        >
          {loading ? "Processing..." : "Confirm & Pay"}
        </button>
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </form>
    </div>
  );
}