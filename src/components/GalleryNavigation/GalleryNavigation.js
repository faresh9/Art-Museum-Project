import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import "./GalleryNavigation.css";
const GalleryNavigation = (props) => {
const {galleries} = props;
return (

    <nav><h1>Galleries </h1>
    <NavLink to="/">Gallery 1</NavLink>
    {galleries.map((gallery) => {
        return (
            <NavLink activeClassName = "active" to={`/${gallery.id}`} key={gallery.id}>{gallery.name}</NavLink>
        )
    }
    )}
    
    </nav>

)
}

export default GalleryNavigation;