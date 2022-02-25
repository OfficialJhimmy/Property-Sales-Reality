import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
const PropertyMap = ({ property }) => {
  //   const longitude = Number(`${property.longitude}0`);
  //   const latitude = Number(property.latitude);
  //   console.log(longitude);
  //   console.log(typeof latitude, typeof longitude);
  return (
    <>
      <MapContainer
        center={[property.longitude, property.latitude]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[property.longitude, property.latitude]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </>
  );
};

export default PropertyMap;
