import React from 'react';
import Image from 'next/image';

interface BookingDetails {
  propertyName: string;
  propertyImage: string;
  price: number;
  bookingFee: number;
  totalNights: number;
  startDate: string;
}

const OrderSummary: React.FC<{ bookingDetails: BookingDetails }> = ({ bookingDetails }) => {
  const grandTotal = bookingDetails.price + bookingDetails.bookingFee;

  return (
    <div className="bg-white p-6 shadow-md rounded-lg border">
      <h2 className="text-2xl font-semibold mb-6">Review Order Details</h2>
      <div className="flex items-start mb-6">
        <Image
          src={bookingDetails.propertyImage}
          alt={bookingDetails.propertyName}
          width={96}
          height={96}
          className="w-24 h-24 object-cover rounded-md flex-shrink-0"
        />
        <div className="ml-4 flex-grow">
          <h3 className="text-lg font-semibold">{bookingDetails.propertyName}</h3>
          <p className="text-sm text-gray-500">4.76 (345 reviews)</p>
          <p className="text-sm text-gray-500 mt-1">{bookingDetails.startDate} • {bookingDetails.totalNights} Nights</p>
        </div>
      </div>

      <hr className="my-6" />

      {/* Price Breakdown */}
      <div className="space-y-4 text-gray-700">
        <div className="flex justify-between items-center">
          <span>Subtotal</span>
          <span className="font-medium">${bookingDetails.price.toFixed(2)}</span>
        </div>
        <div className="flex justify-between items-center">
          <span>Booking Fee</span>
          <span className="font-medium">${bookingDetails.bookingFee.toFixed(2)}</span>
        </div>
        <div className="flex justify-between items-center pt-4 border-t border-gray-200 mt-4 text-lg font-bold">
          <span>Grand Total</span>
          <span>${grandTotal.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;