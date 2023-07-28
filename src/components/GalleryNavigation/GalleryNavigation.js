import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

const GalleryNavigation = (props) => {
  const { galleries } = props;
  return (
    <nav>
      <h1>Galleries </h1>
      <NavLink to="/">Gallery 1</NavLink>
      {galleries.map((gallery) => {
        return (
            <NavLink activeClassName = "active" to={`/${gallery.id}`} key={gallery.id}>{gallery.name}</NavLink>
        )
    }
    )}
      <h1>hello</h1>
    </nav>
  );
};

export default GalleryNavigation;
