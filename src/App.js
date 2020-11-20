import React from "react";
import "./styles.css";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Cart from "./Cart";
import { createStore } from "redux";
import reducer from "./Redux/Reducer";
// react-redux - Provider - wraps app , connect - used in components
import { Provider } from "react-redux";
// initial store
import Navbar from "./Navbar";
// store
const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 450,
      md: 800,
      lg: 1000,
      xl: 1400
    }
  }
});
const store = createStore(reducer);

export default function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Cart />
          <Navbar />
        </ThemeProvider>
      </Provider>
    </div>
  );
}
