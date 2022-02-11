import { ReactComponent as DiscordIcon } from "../images/discord.svg";
import GitHubIcon from "@mui/icons-material/GitHub";
import Logo from "../components/Logo";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import TwitterIcon from "@mui/icons-material/Twitter";
import WeekCalendar from "../components/WeekCalendar";
import { makeStyles } from "@mui/styles";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";

const useStyles = makeStyles((theme) => ({
  footer: {
    color: "#a9a9a9",
    fontSize: 16,
    padding: theme.spacing(2),
    background: "#343e48",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

const pages = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Get Started",
    link: "/get-started",
  },
  {
    name: "Learn",
    link: "/learn",
  },
  {
    name: "API",
    link: "/api",
  },
  {
    name: "Blog",
    link: "https://dev.to/nucleoid",
  },
];

function Default({ container, children }) {
  container = container === undefined ? true : container;
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar position="static" sx={{ background: "#323a40" }}>
        <Toolbar
          sx={{ display: { display: "flex", justifyContent: "space-between" } }}
        >
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorEl)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map(({ name, link }) => (
                  <MenuItem key={name} onClick={() => (window.location = link)}>
                    <Typography textAlign="center">{name}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Logo />
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              paddingLeft: 2,
            }}
          >
            {pages.map(({ name, link }) => (
              <Button
                key={name}
                onClick={() => (window.location = link)}
                sx={{ my: 2, color: "#9a9da0", display: "block" }}
              >
                {name}
              </Button>
            ))}
          </Box>
          <Button
            startIcon={<StarBorderIcon />}
            size={"large"}
            sx={{
              my: 2,
              color: "white",
              textTransform: "none",
            }}
            onClick={() =>
              window.open("https://github.com/NucleoidJS/Nucleoid", "_blank")
            }
          >
            Star us on GitHub
          </Button>
        </Toolbar>
      </AppBar>
      {container && <Container>{children}</Container>}
      {!container && <Box>{children}</Box>}
      <footer>
        <Box className={classes.footer}>
          <WeekCalendar />
          Nucleoid
          <Box>
            <IconButton
              onClick={() =>
                window.open("https://discord.gg/eWXFCCuU5y", "_blank")
              }
            >
              <DiscordIcon />
            </IconButton>
            <IconButton
              onClick={() =>
                window.open("https://twitter.com/NucleoidJS", "_blank")
              }
            >
              <TwitterIcon style={{ fill: "#ffffff" }} />
            </IconButton>
            <IconButton
              onClick={() =>
                window.open("https://github.com/NucleoidJS/Nucleoid", "_blank")
              }
            >
              <GitHubIcon style={{ fill: "#ffffff" }} />
            </IconButton>
          </Box>
        </Box>
      </footer>
    </>
  );
}

export default Default;
