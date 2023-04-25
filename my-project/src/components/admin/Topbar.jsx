import React, { useState } from "react";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";

const Topbar = () => {
  const [state, setState] = React.useState({ left: false });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const adminLink = [
    {
      id: "Dashboard",
      title: "Dashboard",
      to: "/admin/dashboard",
    },
    {
      id: "Team",
      title: "Team",
      to: "/admin/team",
    },
    {
      id: "Projects",
      title: "Projects",
      to: "/admin/projects",
    },
    {
      id: "Calendar",
      title: "Calendar",
      to: "/admin/calendar",
    },
    {
      id: "Documents",
      title: "Documents",
      to: "/admin/documents",
    },
    {
      id: "Reports",
      title: "Reports",
      to: "/admin/reports",
    },
  ];

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      className="bg-purple-300"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {adminLink.map((text, index) => (
          <ListItem key={text.id} disablePadding>
            <Link to={text.to}>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text.title} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <div className="border-2 bg-dark-200 divide-y-2 shadow-lg bg-white ">
        <div className="flex flex-row ">
          <div className="lg:hidden block">
            {["left"].map((anchor) => (
              <React.Fragment key={anchor}>
                <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
                <Drawer
                  anchor={anchor}
                  open={state[anchor]}
                  onClose={toggleDrawer(anchor, false)}
                >
                  {list(anchor)}
                </Drawer>
              </React.Fragment>
            ))}
          </div>

          {/*  */}
          <br className="" />
          <div className="relative w-full flex items-center">
            <div className="absolute inset-y-0 px-2 pointer-events-none flex items-center">
              <SearchIcon />
            </div>
            <input
              type="text"
              //   style={{ border: "2px solid red" }}
              className="block border-none w-full px-9 py-3 rounded-md"
              placeholder="Search..."
            />
            <div className="divide-x-2">
              <NotificationsIcon className="text-gray-400 mx-2 border-r border-gray-300  " />
            </div>

            <Avatar
              alt="Remy Sharp"
              src="/static/images/avatar/2.jpg"
              sx={{ width: 24, height: 24 }}
              className="mx-2"
            />
            <select name="" id="" className="p-2 lg:block hidden">
              <option value="">your Profile</option>
              <option value="">Sign Out</option>
              <ArrowDropDownIcon />
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
