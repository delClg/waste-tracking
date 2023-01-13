import { useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const Map = () => {
  const [Hover, setHover] = useState(null);
  console.log(Hover);
  const data = [
    {
      user_id: "1234567",
      coordinates: [-75.546518086577947, 45.467134581917357],
      img: "image",
      date: "21-02-2023",
      name: "chaitanya",
    },
  ];
  return (
    <div style={{ width: "100%", height: "300px" }}>
      <MapContainer center={[45.4, -75.7]} zoom={12} scrollWheelZoom={false}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {data.map((key) => (
          <Marker
            key={key.user_id}
            position={[key.coordinates[1], key.coordinates[0]]}
            eventHandlers={{ click: () => setHover(key) }}
          />
        ))}
        {Hover && (
          <Popup
            position={[Hover.coordinates[1], Hover.coordinates[0]]}
            onClose={() => {
              setHover(null);
            }}
          >
            <div>
              {/* <h4>{Hover.name}</h4> */}
              <p style={{ textAlign: "center", fontSize: "1rem" }}>
                <strong>Since :</strong>
                {""}
                {Hover.date}
              </p>
              <img
                src="./Waste.webp"
                style={{ height: "100px", width: "130px" }}
              />
            </div>
          </Popup>
        )}
      </MapContainer>
    </div>
  );
};

export default Map;
