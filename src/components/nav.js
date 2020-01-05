import React from 'react';
import {Link} from 'react-router-dom'
function Nav() {
  const style={
    color:"white"
  }
  return (
     <nav>
   <h3>Logo</h3>
        <ul className="nav-link">
          <Link style={style} to="/about">
          <li >About </li>
          </Link>
          <Link style={style} to="/shope">
          <li>Shop </li>
          </Link>
       </ul>

     </nav>
  );
}

export default Nav;
