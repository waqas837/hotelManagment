import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  Box,
  Drawer,
  List,
  ListItem,
  Typography,
  makeStyles,
  Divider,
  Button,
  Collapse,
} from "@material-ui/core";
import { blueGrey, purple } from "@material-ui/core/colors";

import {
  SupervisorAccount,
  Dashboard,
  CollectionsBookmark,
  Person,
  SettingsApplications,
  Feedback,
  ExpandMore,
  ExpandLess,
} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  font: {
    fontStyle: "italic",
  },
  // addBreakpoint: {
  //   [theme.breakpoints.down("md")]: {
  //     width: "50%",
  //   },
  // },
  hover: {
    "&:hover": {
      background: blueGrey[500],
      borderLeft: "2px solid tomato",
    },
  },
}));
//component starts here
const Panel = () => {
  const classes = useStyles();
  const history = useHistory();
  const [state, setstate] = useState(null);
  const user = localStorage.getItem("user");
  function collpseHandler() {
    setstate(!state);
  }

  return localStorage.getItem("user") ? (
    <div>
      <Box className={classes.addBreakpoint}>
        <Drawer variant="permanent" anchor="left" component={Box}>
          <List style={{ backgroundColor: blueGrey[900], width: "210px" }}>
            <ListItem
              className={classes.hover}
              button
              onClick={() => history.push("/userDashboard")}
            >
              <Typography variant="h6" style={{ color: "white" }}>
                <Dashboard /> Dashboard
              </Typography>
            </ListItem>
            <br />
            <Divider style={{ backgroundColor: "white" }} />
            {/* user dashboard */}
            <ListItem className={classes.hover} button>
              <Typography variant="body2" style={{ color: "white" }}>
                {user}
              </Typography>
            </ListItem>
            <Divider style={{ backgroundColor: "white" }} />

            <ListItem
              style={{ color: purple[50] }}
              button
              onClick={() => history.push("/")}
            >
              <CollectionsBookmark /> &nbsp; Bookings
            </ListItem>
            <ListItem
              className={classes.hover}
              style={{ color: purple[50] }}
              button
              onClick={collpseHandler}
            >
              <SupervisorAccount /> &nbsp; Profiles{" "}
              {state ? <ExpandMore /> : <ExpandLess />}
            </ListItem>
            {/* collapse */}
            <Collapse in={state} timeout="auto" unmountOnExit>
              <ListItem
                className={classes.hover}
                style={{ color: purple[50] }}
                button
              >
                &nbsp;&nbsp; <SupervisorAccount /> &nbsp; new Profiles
              </ListItem>
            </Collapse>
            {/* end collpase */}
            <ListItem
              className={classes.hover}
              style={{ color: purple[50] }}
              button
              onClick={() => history.push("/")}
            >
              <Person /> &nbsp; My Profiles
            </ListItem>
            <ListItem
              className={classes.hover}
              style={{ color: purple[50] }}
              button
              onClick={() => history.push("/")}
            >
              <SettingsApplications /> &nbsp;Administration
            </ListItem>
            <ListItem
              className={classes.hover}
              style={{ color: purple[50] }}
              button
              onClick={() => history.push("/")}
            >
              <Feedback /> &nbsp; Submit Feedback
            </ListItem>

            <Divider />
            <Button size="small" style={{ color: "white" }}>
              {" "}
              Privacy Terms
            </Button>
            <Typography variant="caption" style={{ color: "whitesmoke" }}>
              {" "}
              Booking.com
            </Typography>
          </List>
        </Drawer>
      </Box>
    </div>
  ) : null;
};

export default Panel;
