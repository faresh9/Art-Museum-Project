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

        <Route>
          <h1>404:Unknown Route</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
