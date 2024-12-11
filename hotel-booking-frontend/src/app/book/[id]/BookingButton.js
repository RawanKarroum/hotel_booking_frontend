"use client";

import { useState } from 'react';

export default function BookingButton({ room }) {
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');

  const handleBooking = async () => {
    try {
      if (!checkInDate || !checkOutDate) {
        alert('Please select check-in and check-out dates.');
        return;
      }

      const bookingData = {
        room_id: room.id,
        check_in_date: checkInDate,
        check_out_date: checkOutDate,
      };

      const response = await fetch('http://localhost:8001/api/bookings/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        alert(`Booking failed: ${errorData.error}`);
        return;
      }

      const responseData = await response.json();
      alert('Booking successful!');
      console.log('Booking response:', responseData);
    } catch (error) {
      console.error('Error booking room:', error);
      alert('An error occurred while booking the room.');
    }
  };

  return (
    <div>
      <label>
        Check-in Date:
        <input
          type="date"
          value={checkInDate}
          onChange={(e) => setCheckInDate(e.target.value)}
        />
      </label>
      <label>
        Check-out Date:
        <input
          type="date"
          value={checkOutDate}
          onChange={(e) => setCheckOutDate(e.target.value)}
        />
      </label>
      <button onClick={handleBooking}>Confirm Booking</button>
    </div>
  );
}
