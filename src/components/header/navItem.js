import React from "react"
import {Link} from "gatsby"

export default (props) =>
  (<li className="nav-item">
    <Link to={props.to} className="nav-link">{props.children}</Link>
  </li>)