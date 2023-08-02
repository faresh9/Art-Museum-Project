import React from 'react';
import { useParams } from 'react-router-dom';
import ArtImageTile from '../ArtImageTile';

function GalleryView({ gallery }) {
  const { galleryId } = useParams();

  return (
    <div>
      <h2>{gallery.name}</h2>
      <div>
        {gallery.objects.map((art) => (
          <ArtImageTile key={art.id} art={art} />
        ))}
      </div>
    </div>
  );
}

export default GalleryView;
