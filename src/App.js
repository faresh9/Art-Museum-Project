// src/App.js
import React from "react";
import { Switch, Route } from "react-router-dom";
import harvardArt from "./data/harvardArt";
import GalleryNavigation from "./components/GalleryNavigation/GalleryNavigation";
import GalleryView from "./components/GalleryView/index";
import HomePage from "./components/HomePage/HomePage";
import PageNotFound from "./components/PageNotFound/PageNotFound";

function App() {
  const findGalleryById = (galleryId) => {
    return harvardArt.records.find((gallery) => gallery.id === galleryId);
  };

  const GalleryViewWithGallery = ({ match }) => {
    const gallery = findGalleryById(match.params.galleryId);
    return <GalleryView gallery={gallery} />;
  };

  return (
    <div className="page-wrapper">
      <GalleryNavigation galleries={harvardArt.records} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route
          path="/galleries/:galleryId"
          component={GalleryViewWithGallery}
        />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
