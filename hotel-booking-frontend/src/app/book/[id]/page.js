import { fetchRoomDetails } from '../../services/hotelService';
import BookingButton from './BookingButton';

export default async function BookRoomPage({ params }) {
  const { id } = await params;

  const room = await fetchRoomDetails(id);

  return (
    <div>
      <h1>Book Room</h1>
      <p><strong>Room Type:</strong> {room.room_type}</p>
      <p><strong>Price:</strong> ${room.price}</p>
      <p><strong>Hotel:</strong> {room.hotel}</p>

      <BookingButton room={room} />
    </div>
  );
}
