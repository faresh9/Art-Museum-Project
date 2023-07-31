import { NavLink } from "react-router-dom";


function ArtImageTile({art}){


  return (
    <div>
      {art.map((work)=>
      <NavLink to = {`/galleries/${galleryId}/art/${work.id}`}>

      </NavLink>

        <Route path = '/galleries/:galleryId/art/:artId'>

        </Route>
  ))}
    </div>
  )

}