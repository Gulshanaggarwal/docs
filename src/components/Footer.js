import { ReactComponent as DiscordIcon } from "../images/discord.svg";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import WeekCalendar from "../components/WeekCalendar";
import { Box, IconButton } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  footer: {
    color: "#a9a9a9",
    fontSize: 16,
    padding: 16,
    background: "#343e48",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

function Footer() {
  const classes = useStyles();

  return (
    <footer>
      <Box className={classes.footer}>
        <WeekCalendar />
        Nucleoid
        <Box>
          <IconButton
            onClick={() =>
              window.open("https://discord.gg/eWXFCCuU5y", "_blank")
            }
          ></IconButton>
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
  );
}

export default Footer;
