import React from "react";
import harvardArt from "./data/harvardArt";
import GalleryNavigation from "./components/GalleryNavigation/GalleryNavigation";
import { NavLink } from "react-router-dom";
import GalleryView from "./components/GalleryView/index";
function App() {
  return <GalleryNavigation galleries={harvardArt.records} />;
}

export default App;
