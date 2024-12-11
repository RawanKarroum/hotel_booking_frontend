import { fetchRooms } from '../services/hotelService';

export default async function RoomsPage() {
  const rooms = await fetchRooms();

  return (
    <div>
      <h1>Available Rooms</h1>
      <ul>
        {rooms.map((room) => (
          <li key={room.id}>
            <p><strong>Room Type:</strong> {room.room_type}</p>
            <p><strong>Price:</strong> ${room.price}</p>
            <p><strong>Hotel:</strong> {room.hotel}</p>
            {room.available ? (
              <a href={`/book/${room.id}`}>Book Now</a>
            ) : (
              <p>Not Available</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
