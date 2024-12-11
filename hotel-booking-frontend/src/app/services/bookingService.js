import axios from 'axios';

const BOOKING_SERVICE_BASE_URL = 'http://localhost:8001/api';

export const createBooking = async (bookingData) => {
  const response = await axios.post(`${BOOKING_SERVICE_BASE_URL}/bookings/`, bookingData);
  return response.data;
};
