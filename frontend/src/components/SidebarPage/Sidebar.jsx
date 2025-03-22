import React, { useRef } from "react";
import { Autocomplete } from "@react-google-maps/api";
import "./Sidebar.css"

const Sidebar = ({
  showPlaces,
  displayOnClick,
  calculateRoute,
  clearRoute,
  originRef,
  destRef,
  distance,
  duration,
  places
}) => {
  return (
    <div className="Sidebar">
      {/* left side div */}
      <Autocomplete
        onLoad={(autocomplete) => {
          autocomplete.setComponentRestrictions({
            country: ["in"],
          });
        }}
      >
        <input
          
          type="text"
          placeholder="start"
          ref={originRef}
          id="start"
        />
      </Autocomplete>

      <button
       
        type="button"
        onClick={displayOnClick}
      >
        Try using current Location
      </button>

      <Autocomplete
        onLoad={(autocomplete) => {
          autocomplete.setComponentRestrictions({
            country: ["in"],
          });
        }}
      >
        <input
          
          type="text"
          placeholder="destination"
          ref={destRef}
        />
      </Autocomplete>

      <button
       
        type="submit"
        onClick={calculateRoute}
      >
        calculate route
      </button>

      

      <button
        
        type="submit"
        onClick={clearRoute}
      >
        clear route
      </button>

      <p 
      
      >
        Distance:
        <span 
        
        >{distance}</span>
      </p>

      <p 
      
      >
        Duration:
        <span 
        
        >{duration}</span>
      </p>

      <button
        
        type="submit"
        onClick={showPlaces}
      >
        Show nearby places
      </button>

      <p>
  Places to be visited:
  <div className="places-container">
  <span>
    {places && places.length > 0 ? places.map((place, index) => (
      <div key={index}>{place.name}</div>
    )) : "No places found"}
  </span>
  </div>
</p>

    </div>
  );
};

export default Sidebar;