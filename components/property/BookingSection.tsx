// components/property/BookingSection.tsx
import React, { useState, useEffect } from 'react';
import { differenceInDays, parseISO, isValid } from 'date-fns';

interface BookingSectionProps {
  price: number;
}

const BookingSection: React.FC<BookingSectionProps> = ({ price }) => {
  const [checkInDate, setCheckInDate] = useState<string>('');
  const [checkOutDate, setCheckOutDate] = useState<string>('');
  const [totalCost, setTotalCost] = useState<number>(0);
  const [numberOfNights, setNumberOfNights] = useState<number>(0);

  useEffect(() => {
    if (checkInDate && checkOutDate) {
      const start = parseISO(checkInDate);
      const end = parseISO(checkOutDate);

      if (isValid(start) && isValid(end) && end > start) {
        const nights = differenceInDays(end, start);
        setNumberOfNights(nights);
        setTotalCost(price * nights);
      } else {
        setTotalCost(0);
        setNumberOfNights(0);
      }
    } else {
      setTotalCost(0);
      setNumberOfNights(0);
    }
  }, [checkInDate, checkOutDate, price]);

  return (
    <div className="sticky top-6 bg-white p-6 shadow-xl rounded-lg border border-gray-200">
      <h3 className="text-3xl font-bold mb-4">
        ${price}<span className="text-lg font-normal text-gray-600"> / night</span>
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div>
          <label htmlFor="check-in" className="block text-sm font-medium text-gray-700 mb-1">
            Check-in
          </label>
          <input
            id="check-in"
            type="date"
            className="border border-gray-300 p-3 w-full rounded-md focus:ring-blue-500 focus:border-blue-500"
            value={checkInDate}
            onChange={(e) => setCheckInDate(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="check-out" className="block text-sm font-medium text-gray-700 mb-1">
            Check-out
          </label>
          <input
            id="check-out"
            type="date"
            className="border border-gray-300 p-3 w-full rounded-md focus:ring-blue-500 focus:border-blue-500"
            value={checkOutDate}
            onChange={(e) => setCheckOutDate(e.target.value)}
          />
        </div>
      </div>

      {numberOfNights > 0 && (
        <div className="mt-6 border-t border-gray-200 pt-4">
          <div className="flex justify-between items-center text-gray-700">
            <p className="text-lg">${price} x {numberOfNights} nights</p>
            <p className="text-lg">${price * numberOfNights}</p>
          </div>
          <div className="flex justify-between items-center mt-3 font-bold text-xl">
            <p>Total payment:</p>
            <p>${totalCost}</p>
          </div>
        </div>
      )}

      <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg w-full transition duration-300 ease-in-out">
        Reserve now
      </button>
    </div>
  );
};

export default BookingSection;