// Google Maps JavaScript API

// Used for rendering the map and handling map-related functionality.
// Google Places API

// Used for searching nearby places (e.g., tourist attractions).
// Google Directions API

// Used for calculating routes between an origin and a destination.
// Additionally, the Google Geocoding API is used to convert coordinates into readable addresses, but it's accessed via a simple HTTP request rather than the JavaScript API.


import {React,useState,useRef,useEffect} from 'react'
import MapComp from '../components/Map/MapComp'
import Sidebar from '../components/SidebarPage/Sidebar'
import "./MapPage.css"


// importing from the "@react-google-maps/api"
// useJsApiLoader - hook for loading of google maps javaScript api script in the browser
import {
    useJsApiLoader,
  } from "@react-google-maps/api";
  
const MapPage = () => {

    const [center, setCenter] = useState(null);
    const [map, setMap] = useState(null);
    const [directionsResponse, setDirectionsResponse] = useState(null);
    const [distance, setDistance] = useState("");
    const [duration, setDuration] = useState("");
    const [userLocation, setUserlocation] = useState("");
    const [places, setPlaces] = useState([]);
    const directionRendererRef = useRef(null);
  
    const originRef = useRef();
    const destRef = useRef();
    const apiKey = "AIzaSyDtimyHLolsilsKcrD_oYFGYjjjV7mNNZM";
    // hook that tells whether map is loaded on browser or not
    const { isLoaded } = useJsApiLoader({
      googleMapsApiKey: apiKey, // The useJsApiLoader hook loads the Google Maps API with the provided API key and the "places" library for accessing places features.
      libraries: ["places"],
    });

    // centered by default at the current location
  useEffect(() => {
    if (isLoaded && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition( // to get the user's current location using the navigator.geolocation API.
        (position) => {
          console.log(position)
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;

          const userPos = { lat: latitude, lng: longitude };
          setCenter(userPos);
          setUserlocation(`${latitude},${longitude}`);
        },
        (error) => {
          console.log("error getting the map!");
          alert("Geolocation api isn't supported by the browser!");
        }
      );
    }
  }, [isLoaded]);

  // function to display coords on click
  async function displayOnClick() {
    if (userLocation) {
      const response = await fetch( // This function fetches the address from the userLocation coordinates using the Google Geocoding API 
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${userLocation}&key=${apiKey}`
      );
      const data = await response.json();
      if (data.status === "OK") {
        const address = data.results[0].formatted_address;
        originRef.current.value = address;
      } else {
        console.error("error retrieving address", data.status);
      }
    }
  }

  //  function to find in between places
  async function findPlacesAlongRoute(route) {
    const service = new window.google.maps.places.PlacesService(map);
    const path = route.routes[0].overview_path;
    const allPlaces = [];

    for (let i = 0; i < path.length; i += 5) {
      const request = {
        location: path[i],
        radius: "5000",
      };
      service.nearbySearch(request, (results, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
          allPlaces.push(...results);
          setPlaces(allPlaces);
        }
      });
    }
    console.log(allPlaces);
  }
//   function to show nearby places
const showPlaces = async () => {
    console.log("Attempting to fetch places...");
    if (!originRef.current.value || !map) {
      return; // Ensure the user location and map are available
    }
  
    // This function searches for nearby places (e.g., restaurants, tourist spots) along the route path. 
    // It uses the Google Places API to perform a nearbySearch for places within a 5km radius along the route.
    // This function geocodes the user's origin (entered in the input) to get its coordinates, then uses the Places API to search for nearby tourist attractions within a 20km radius.
    // Geocode the entered address to get location coordinates
    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ address: originRef.current.value }, (results, status) => {
      if (status === window.google.maps.GeocoderStatus.OK && results[0]) {
        const location = results[0].geometry.location;
  
        const service = new window.google.maps.places.PlacesService(map);
        const request = {
          location: location, // Use the geocoded location // 
          radius: '20000', 
          type: ['tourist_attraction'],
        };
  
        service.nearbySearch(request, (results, status) => {
          if (status === window.google.maps.places.PlacesServiceStatus.OK) {
            setPlaces(results);
          } else {
            console.error("Error fetching tourist places:", status);
          }
        });
      } else {
        console.error("Geocode was not successful for the following reason: " + status);
      } 
    });
  };
  
  

  //   function to calculate the route
  async function calculateRoute() {
    if (originRef.current.value === "" || destRef.current.value === "") {  
      // This function calculates the route between the origin and destination using the Google Directions API.
      return;
    }
    const directionService = new window.google.maps.DirectionsService();
    const results = await directionService.route({
      origin: originRef.current.value,
      destination: destRef.current.value,
      travelMode: window.google.maps.TravelMode.DRIVING,
    });
    setDirectionsResponse(results);
    setDistance(results.routes[0].legs[0].distance.text);
    setDuration(results.routes[0].legs[0].duration.text);
    // console.log(results)

    if (directionRendererRef.current) {
      directionRendererRef.current.setMap(null);
    }
    directionRendererRef.current = new window.google.maps.DirectionsRenderer({
      directions: results,
      map: map,
    });
    findPlacesAlongRoute(results);
  }

  //   function to clear the route
  function clearRoute() {
    if (directionRendererRef.current) {
      directionRendererRef.current.setMap(null);
      directionRendererRef.current = null;
    }
    setDirectionsResponse(null);
    setDistance("");
    setDuration("");
    originRef.current.value = "";
    destRef.current.value = "";
  }

  if (!isLoaded) {
    return <h1>sorry! the map is being loaded</h1>;
  }

  return (
    <div className="MapPage">
        <Sidebar
        displayOnClick={displayOnClick}
        calculateRoute={calculateRoute}
        clearRoute={clearRoute}
        originRef={originRef}
        destRef={destRef}
        distance={distance}
        duration={duration}
        map={map}
        showPlaces={showPlaces}
        places = {places}
      />
      <MapComp
        center={center}
        setMap={setMap}
        directionsResponse={directionsResponse}
      />
    </div>
  )
}

export default MapPage;




