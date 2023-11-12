import React from "react";
import Home from "./components/Home";
import { ThemeProvider} from "@mui/material/styles";
import CryptoProvider from "./context/CryptoContext";
import theme from './themes/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CryptoProvider>
        <Home />
      </CryptoProvider>
    </ThemeProvider>
  );
}

export default App;
