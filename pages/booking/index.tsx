// pages/booking/index.tsx

import { useState, useCallback } from "react";


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

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      setLoading(true);
      setError(null);
      setSuccess(false);

      try {
        const response = await fetch(`/api/bookings`, {
          method: "POST",
          body: JSON.stringify(formData),
          headers: {
            "Content-Type": "application/json; charset=utf-8",
          },
        });

        if (!response.ok) {
          throw new Error("Failed to submit booking. Please try again.");
        }

        const data = await response.json();
        console.log("Booking successful:", data);
        setSuccess(true);
      } catch (err) {
        console.error("Error submitting booking:", err);
        setError("Failed to submit booking. Please try again.");
      } finally {
        setLoading(false);
      }
    },
    [formData]
  );

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (success) {
    return (
      <div className="container mx-auto p-4 text-center text-green-500">
        <h1 className="text-2xl font-bold">Booking Confirmed! 🎉</h1>
        <p>Your booking has been successfully processed.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Confirm Your Booking</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
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
        {/* All other form fields would go here */}
        <button
          type="submit"
          disabled={loading}
          className="w-full p-2 text-white bg-blue-500 rounded hover:bg-blue-600 disabled:bg-gray-400"
        >
          Confirm & Pay
        </button>
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </form>
    </div>
  );
}