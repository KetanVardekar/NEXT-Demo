import React from "react";
import { List, ListItemText } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import icon from "../../public/B2-LogoT.png";
import Image from "next/image";
import MuiDrawer from "@mui/material/Drawer";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import ApartmentIcon from "@mui/icons-material/Apartment";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import Link from "next/link";
import { ChevronRight } from "@mui/icons-material";

const Sidebar = ({ open, toggleDrawer }: any) => {
  const defaultTheme = createTheme();

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <div
        style={{
          width: open ? "20%" : "5%",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderRight: "1px solid #E0E0E0",
          }}
        >
          <Image src={icon} alt="Icon" width={19} height={19} />

          {open ? "Treatment Tracker™" : ""}
          <IconButton onClick={toggleDrawer}>
            {open ? <ChevronLeftIcon /> : <ChevronRight />}
          </IconButton>
        </Toolbar>
        <Divider />
        <List component="nav">
          <Link
            href="/dashboard"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <ListItemButton>
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              {open && <ListItemText primary="Dashboard" />}
            </ListItemButton>
          </Link>
          <Divider />
          <Link
            href="/users"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <ListItemButton>
              <ListItemIcon>
                <PeopleIcon />
              </ListItemIcon>
              {open && <ListItemText primary="Users" />}
            </ListItemButton>
          </Link>
          <Divider />
          <Link
            href="/roles"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <ListItemButton>
              <ListItemIcon>
                <PersonAddAltIcon />
              </ListItemIcon>
              {open && <ListItemText primary="Roles" />}
            </ListItemButton>
          </Link>
          <Divider />
          <Link
            href="/organization"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <ListItemButton>
              <ListItemIcon>
                <ApartmentIcon />
              </ListItemIcon>
              {open && <ListItemText primary="Organization" />}
            </ListItemButton>
          </Link>
          <Divider sx={{ my: 1 }} />
        </List>
      </div>
    </ThemeProvider>
  );
};

export default Sidebar;
