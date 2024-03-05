import React from "react";
// import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Auth0Provider } from "@auth0/auth0-react";

// Import createRoot directly from "react-dom"
import { createRoot } from "react-dom";

// Create a Material-UI theme
const theme = createTheme();

// Set up Auth0 configuration
const auth0Config = {
  domain: "dev-resf1oi2v4s5fuox.us.auth0.com",
  clientId: "s0TTJ9WIUhOKTHECgauSNgC64RzVlLVX",
  authorizationParams: {
    redirect_uri: window.location.origin,
  },
};

// Use createRoot instead of ReactDOM.render
const root = createRoot(document.getElementById("root"));

root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Auth0Provider {...auth0Config}>
      <App />
    </Auth0Provider>
  </ThemeProvider>,
  document.getElementById("root")
);
