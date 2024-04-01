import React from "react";
import { Link, Outlet } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Slide from "@mui/material/Slide";
import { Aperture } from "lucide-react";

const navItems = [
  {
    label: "Home",
    route: "/",
  },
  {
    label: "Payments",
    route: "/payments",
  },
  {
    label: "Home",
    route: "/",
  },
  {
    label: "Home",
    route: "/",
  },
];


function HideOnScroll(props:  {
  window?: () => Window;
  children: React.ReactElement;
}) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function HomeLayout() {
  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll>
        <AppBar>
          <Toolbar>
            <div className="flex items-center select-none">
              <Aperture className="text-white mr-2 " />
              <Typography variant="h6" component="div">
                SHUTTLE HUB
              </Typography>
            </div>
            <Box
              sx={{ display: { xs: "none", sm: "block" }, marginLeft: "auto" }}
            >
              {navItems.map((item) => (
                <Link to={item.route}>
                  <Button key={item.label} sx={{ color: "#fff" }}>
                    {item.label}
                  </Button>
                </Link>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
      <div className="py-6">
        <Outlet />
      </div>
    </React.Fragment>
  );
}
