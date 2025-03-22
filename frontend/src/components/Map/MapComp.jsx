import React, { useEffect, useRef, useState } from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";
import "./Map.css"

const MapComp = ({ center, setMap, map }) => {
  const userMarker = useRef(null);
  useEffect(() => {
    if (map && center) {
      if (!userMarker.current) {
        userMarker.current = new window.google.maps.Marker({
          position: center,
          map: map,
          title: "your location",
        });
      } else {
        userMarker.current.setPosition(center);
      }
      map.setCenter(center);
    }
  }, [map, center]);
  return (
    <div className="mapComp">
      {/* google map box */}

      <GoogleMap
        center={center || { lat: 0, lng: 0 }}
        zoom={13}
        mapContainerStyle={{ width: "100%", height: "100%" }}
        options={{
          zoomControl: false,
          fullscreenControl: false,
        }}
        onLoad={(map) => {
          setMap(map);
        }}
      >
        {/* displaying marker or directions */}
        {center && <Marker position={center} title="your location" />}
      </GoogleMap>
    </div>
  );
};

export default MapComp;