import React, { useState } from "react";
import "./Navbar.css";
import { Container, Typography, Toolbar, IconButton, Box, List, ListItem, ListItemText } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core/styles";
import MobilLeftMenuSlider from "@material-ui/core/Drawer";
import { Link } from "react-router-dom";

//css style the slide bar
const useStyles = makeStyles({
  menuSliderContainer: {
    width: "100vw",
    background: "#000",
    height: "30rem",
    color: "#fff",
    fontSize: " 1.5em",
  },

  sliderText: {
    textAlign: "center",
    paddingBottom: "15px",
  },

  sliderList: {
    paddingTop: "80px",
  },
});

//setting the state is side navbar is open or not
const Navbar = () => {
  const classes = useStyles();
  const [open, setopen] = useState({
    left: false,
  });

  // toggling the nav icon
  const toggleSlider = (slider, isopen) => {
    setopen({ ...isopen, [slider]: isopen });
  };

  const sliderSection = (slider) => (
    <Box className={classes.menuSliderContainer} component="div" onClick={() => toggleSlider(slider, false)}>
      <List className={classes.sliderList}>
        <ListItem button component={Link} to="/">
          <ListItemText className={classes.sliderText} primary="Home" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <header>
        <Container>
          <nav>
            <div className="logo">
              <Typography variant="h6" gutterBottom>
                <Link to="/">FackBook</Link>
              </Typography>
            </div>
            <div className="nav_menu">
              <ul className="desktop">
                <Link to="/">
                  <li>Home</li>
                </Link>
              </ul>
              <Toolbar className="nav_icon mobile">
                <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => toggleSlider("bottom", true)}>
                  <MenuIcon />
                </IconButton>
                <MobilLeftMenuSlider open={open.bottom} anchor="bottom" onClose={() => toggleSlider("bottom", false)}>
                  {sliderSection("bottom")}
                </MobilLeftMenuSlider>
              </Toolbar>
            </div>
          </nav>
        </Container>
      </header>
    </>
  );
};

export default Navbar;
