import { NavLink, Route, Switch } from 'react-router-dom'

const GalleryNavigation = (props) => {
const {galleries} = props;
return (

    <nav><h1>Galleries </h1>
    <NavLink to="/">Gallery 1</NavLink>
    {galleries.map((gallery) => {
        return (
            <NavLink to={`/${gallery.id}`} key={gallery.id}>{gallery.name}</NavLink>
        )
    }
    )}
      <h1>hello</h1>
    </nav>

)
}

export default GalleryNavigation;