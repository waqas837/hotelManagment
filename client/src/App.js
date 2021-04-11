import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Homepage from "./Components/HomePage/Home";
import Navbar from "./Components/Navbar/Navbar";
import Signin from "./Components/Signin/Signin";
import Signup from "./Components/SignUp/Signup";
import Panel from "./Components/UserPanel/Panel";
import Userdashboard from "./Components/UserDashboard/Userdashboard";
import Admin from "./Components/Admin/Admin";
const font = "'Roboto', sans-serif;";

const theme = createMuiTheme({
  typography: {
    fontFamily: font,
    button: {
      textTransform: "capitalize",
    },
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Router>
          <Route exact path="/">
          <Navbar />
            <Homepage />
          </Route>
          <Route exact path="/signin">
          <Navbar />
            <Signin />
          </Route>
          <Route exact path="/userDashboard">
          <Navbar />
            <Userdashboard />
          </Route>
          <Route exact path="/signup">
          <Navbar />
            <Signup />
          </Route>
          <Route exact path="/admin">
            <Admin/>
          </Route>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
//when we make a function after its process where it will be called then if you gave
//a return some code then where this function will be called return code will be printed there where we called this function
