import React from 'react';
import { Link } from 'react-router-dom';

function ArtImageTile({ art }) {
  const firstImage = art.images[0];

  return (
    <Link to={`/galleries/${art.galleryId}/art/${art.id}`}>
      <img src={firstImage} alt={`Artwork ${art.id}`} />
    </Link>
  );
}

export default ArtImageTile;
