import React from "react";
import {useHistory} from "react-router-dom"
import {
  Box,
  Drawer,
  List,
  ListItem,
  Typography,
  makeStyles,
  Divider,
} from "@material-ui/core";
import { CloudDownload, Delete, AddAPhoto } from "@material-ui/icons";
const useStyles = makeStyles((theme) => ({
  font: {
    fontStyle: "italic",
  },
  addBreakpoint: {
    [theme.breakpoints.down("md")]: {
      width: "50%",
    },
  },
}));
const Sidebar = () => {
  const classes = useStyles();
  const history = useHistory()
  return (
    <div>
      <Box className={classes.addBreakpoint}>
        <Drawer variant="permanent" anchor="left" component={Box}>
          <List>
            <ListItem button>
              <Typography variant="h6" color="primary">
                wall
              </Typography>
              <Typography
                className={classes.font}
                variant="h6"
                color="secondary"
              >
                papers!
              </Typography>
            </ListItem>
            <Divider />
            <ListItem button onClick={()=>history.push("/saved")}>
              <CloudDownload color="primary" /> &nbsp; Saved
            </ListItem>
            <Divider />
            <ListItem button>
              <Delete color="secondary" /> &nbsp; Delete
            </ListItem>
            <Divider />
            <ListItem button>
              <AddAPhoto color="primary" /> &nbsp; Add more
            </ListItem>
            <Divider />
          </List>
        </Drawer>
      </Box>
    </div>
  );
};

export default Sidebar;
