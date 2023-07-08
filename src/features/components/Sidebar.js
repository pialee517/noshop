import { List, ListItem, useTheme } from "@mui/material";
import React, { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import HandlePage from './../../handler/HandlePage'
import { tokens } from "../../Styles/theme";


const Sidebar = ({nav}) => {
  return(
    <React.Fragment>
      <List>
      {nav && nav.map(item => (
          <NavLink to={item.path} key={`drawer-` + item.name}>
            <ListItem>
              {item.name}
            </ListItem>
          </NavLink>
      ))}
      </List>
    </React.Fragment>
  )
}

  export default Sidebar