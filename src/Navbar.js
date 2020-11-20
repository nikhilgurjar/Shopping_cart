import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import "./styles.css";
// Material ui
import { styled } from "@material-ui/core/styles";
import { useTheme, useMediaQuery } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import {
  PersonOutlineOutlined,
  PersonPinCircleOutlined,
  LocalMall,
  LocalDining
} from "@material-ui/icons";

const NavLinksStyle = styled("a")({
  color: "#FDF8F2",
  padding: "2px",
  display: "flex",
  height: "100%",
  textDecoration: "none",
  flexDirection: "column",
  alignItems: "center"
});

const NavButtonStyle = styled(Button)({
  color: "#ffffff",
  border: "none"
});

const Navbar = () => {
  return (
    <AppBar
      elevation={0}
      position="static"
      style={{
        height: "60px",
        backgroundColor: "#F0C4C3",
        maxWidth: 800,
        margin: "0 auto"
      }}
    >
      <Toolbar
        style={{
          width: "100%",
          minHeigth: "50px",
          position: "relative",
          display: "flex",
          justifyContent: "space-around"
        }}
      >
        <NavLinksStyle>
          <LocalDining />
          <NavButtonStyle>Home</NavButtonStyle>
        </NavLinksStyle>
        <NavLinksStyle>
          <LocalMall />
          <NavButtonStyle>Products</NavButtonStyle>
        </NavLinksStyle>
        <NavLinksStyle>
          <PersonPinCircleOutlined className="navbarctive" />
          <NavButtonStyle>Home</NavButtonStyle>
        </NavLinksStyle>
        <NavLinksStyle>
          <NavButtonStyle>Home</NavButtonStyle>
        </NavLinksStyle>
        <NavLinksStyle>
          <PersonOutlineOutlined />
          <NavButtonStyle>Account</NavButtonStyle>
        </NavLinksStyle>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
