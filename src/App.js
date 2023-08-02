import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import harvardArt from './data/harvardArt';
import GalleryNavigation from './components/GalleryNavigation';
import GalleryView from './components/GalleryView';
import HomePage from './components/HomePage';
import PageNotFound from './components/PageNotFound';

function App() {
  const findGalleryById = (galleryId) => {
    return harvardArt.records.find((gallery) => gallery.id === galleryId);
  };

  const GalleryViewWithGallery = ({ match }) => {
    const gallery = findGalleryById(match.params.galleryId);
    return <GalleryView gallery={gallery} />;
  };

  return (
    <Router>
      <div className="page-wrapper">
        <GalleryNavigation galleries={harvardArt.records} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/galleries/:galleryId" render={GalleryViewWithGallery} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
