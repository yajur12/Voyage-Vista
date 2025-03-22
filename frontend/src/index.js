import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "remixicon/fonts/remixicon.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthContextProvider>
  </React.StrictMode>
);



// import React from "react";
// import ReactDOM from "react-dom/client";

// import App from "./App";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "remixicon/fonts/remixicon.css";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { BrowserRouter } from "react-router-dom";
// import { AuthContextProvider } from "./context/AuthContext";
// import { GoogleOAuthProvider } from "@react-oauth/google"; // Import GoogleOAuthProvider

// const clientId = '547068540779-bfsh6k83f7oaqqd2t55bmmtddok4ufkl.apps.googleusercontent.com'; // Replace with your actual Google Client ID

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <GoogleOAuthProvider clientId={clientId}>
//       <AuthContextProvider>
//         <BrowserRouter>
//           <App />
//         </BrowserRouter>
//       </AuthContextProvider>
//     </GoogleOAuthProvider>
//   </React.StrictMode>
// );
