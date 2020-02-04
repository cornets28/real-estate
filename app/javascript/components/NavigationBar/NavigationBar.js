// import React from "react";

// import styled from "styled-components";
// import { Link } from "react-router-dom";

// // const NavigationBar = styled.header`
// //   background: #c212df;
// //   color: white;
// //   /* overflow: auto; */
// //   padding: 20px 15px;
// // `;

// const Header = () => (
//   <NavigationBar>
//     <div className="liteLogo">Real Estate</div>
//     <nav>
//       <Link to="/register" className="btn btn-lg custom-button" role="button">
//         Register now
//       </Link>
//       <Link to="/login" className="btn btn-lg custom-button" role="button">
//         Login
//       </Link>
//     </nav>
//   </NavigationBar>
// );

// export default Header;

import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

export default function NavigationBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Real Estate
          </Typography>
          <Button component={Link} raised to="/register" color="inherit">
            Register
          </Button>
          <Button component={Link} raised to="/login" color="inherit">
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
