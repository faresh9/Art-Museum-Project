import React from "react";
import harvardArt from "./data/harvardArt";
import GalleryNavigation from "./components/GalleryNavigation/GalleryNavigation";
import { NavLink, Route, Switch } from "react-router-dom";
import GalleryView from "./components/GalleryView/index";
function App() {
  return (
    <div className="page-wrapper">
      <GalleryNavigation galleries={harvardArt.records} />
      <Switch>
        <Route path="/galleries/:galleryId">
          <GalleryView />
        </Route>

        <Route exact path="/"></Route>
        <h2>Home Page</h2>
        <p>Look, but Don't Touch. Please select a Gallery in the navigation bar</p>
        <Route>
          <h1>404:Unknown Route</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
