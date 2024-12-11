import axios from 'axios';

const HOTEL_SERVICE_BASE_URL = 'http://localhost:8000/api';

export const fetchRooms = async () => {
  const response = await axios.get(`${HOTEL_SERVICE_BASE_URL}/rooms/`);
  return response.data;
};

export const fetchRoomDetails = async (roomId) => {
  const response = await axios.get(`${HOTEL_SERVICE_BASE_URL}/rooms/${roomId}/`);
  return response.data;
};
