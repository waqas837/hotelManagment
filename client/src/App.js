import React from "react";
import "./App.css";
import {BrowserRouter as Router,Route} from "react-router-dom"
import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/sidebar/Sidebar";
import Main from "./Components/Mainpage/Main";
import ShowData from "./Components/ShowSavedData/ShowData";

function App() {
return(<div>
<Router>
<Navbar/>
<Sidebar/>
<Main/>
<Route exact path="/saved">
<ShowData/>
</Route>
</Router>

    </div>
  );
}

export default App;
//when we make a function after its process where it will be called then if you gave
//a return some code then where this function will be called return code will be printed there where we called this function
