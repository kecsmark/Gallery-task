
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import Gallery from "./components/Gallery";
import Highlight from "./components/Highlight";
import Favorites from "./components/Favorites";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/">
          <Navbar />
          <Welcome />
          <Highlight />
        </Route>
        <Route exact path="/gallery">
        <Navbar />
          <Gallery />
        </Route>
        <Route exact path="/favorites">
        <Navbar />
        <Favorites />

        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
