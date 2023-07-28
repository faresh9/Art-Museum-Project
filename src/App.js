import React from "react";
import harvardArt from "./data/harvardArt";
import GalleryNavigation from "./components/GalleryNavigation/GalleryNavigation";
import { NavLink, Route, Switch } from "react-router-dom";
import GalleryView from "./components/GalleryView/index";
function App() {
  return( 
    <div className="page-wrapper">
  <GalleryNavigation galleries={harvardArt.records} />
  <Switch>

  <Route path="/galleries/:galleryId">
  <GalleryView/>
  </Route>

</Switch>
</div>
  );
}

export default App;
