function TripCard({ trip }) {
  return (
    <div>
      <a href={trip.url} target="_blank" rel="noopener noreferrer">
        <img src={trip.photos[0]} alt="รูปภาพที่เที่ยว" />
      </a>
      <h2>
        <a href={trip.url} target="_blank" rel="noopener noreferrer">
          {trip.title}
        </a>
      </h2>
      <p>
        {trip.description.length > 100
          ? trip.description.slice(0, 100) + "..."
          : trip.description}
      </p>
      <a href={trip.url} target="_blank" rel="noopener noreferrer">
        อ่านต่อ
      </a>
      <p>หมวดหมู่: {trip.tags}</p>
      <img src={trip.photos[1]} alt="รูปภาพที่เที่ยว" />
      <img src={trip.photos[2]} alt="รูปภาพที่เที่ยว" />
      <img src={trip.photos[3]} alt="รูปภาพที่เที่ยว" />
    </div>
  );
}

export default TripCard;
