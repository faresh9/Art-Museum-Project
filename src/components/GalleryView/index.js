import { NavLink, useParams, Route } from "react-router-dom";

const GalleryView = ({ galleries }) => {
  const { galleryId } = useParams();
  const gallery = galleries.find((gallery) => gallery.id === galleryId);
  return <h1>Hello from GalleryView</h1>;
};
export default GalleryView;
