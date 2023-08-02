import React from 'react';
import { useParams, Link } from 'react-router-dom';

function ArtDescription({ gallery }) {
  const { artId } = useParams();
  const art = gallery.objects.find((artwork) => artwork.id === artId);

  if (!art) {
    return <h2>Artwork not found.</h2>;
  }

  const { title, images, description, credit, technique } = art;

  return (
    <div>
      <Link to={`/galleries/${gallery.id}`}>&lt; Back to Gallery: {gallery.name}</Link>
      <h2>
        <a href={art.url} target="_blank" rel="noopener noreferrer">
          {title}
        </a>
      </h2>
      <div>
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Artwork ${title} ${index + 1}`} />
        ))}
      </div>
      <p>{description}</p>
      <p>Credit: {credit}</p>
      <p>Technique: {technique}</p>
    </div>
  );
}

export default ArtDescription;
