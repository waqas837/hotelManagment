import React, { useState, useEffect } from "react";
import banner from "../../images/banner.jpg";
import { AccountBalance, ExpandLess, ExpandMore } from "@material-ui/icons";
import {
  Button,
  Typography,
  Container,
  Box,
  MenuItem,
  Divider,
  makeStyles,
  Dialog,
  DialogContentText,
  DialogTitle,
  IconButton,
  Grid,
} from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import { AddLocation, Person, Remove, Add } from "@material-ui/icons";
const useStyles = makeStyles((theme) => ({
  resposive: {
    [theme.breakpoints.down("sm")]: {
      textAlign: "right",
      marginLeft: "140px",
      width: "100%",
    },
  },
  resposiveShowCities: {
    [theme.breakpoints.down("sm")]: {
      textAlign: "right",
      marginLeft: "180px",
    },
  },
  settingWidth: {
    width: "20%",
  },
}));

const Main = () => {
  const classes = useStyles();
  useEffect(() => {
    //useEffect calls when a component finishes the rendering
    //so it is similar to component
    //see things that these are actully how acting logically don't woorry it was so easy bcz we'v already done it
    //logic simple:we must store our data after getting a responsed data and because we first call the funcion in useEffect
  }, []); //dependency array: is mein hum jo bhi value dalen gy jub wo change hugi/increment/decrement hugi then useEffect phir hi call huga otherwise call nhi huga
  //if i don't pass anything to it ,then it will just do like a componentdidMount
  const [cities, setcities] = useState();
  const [getCity, setgetCity] = useState([]);
  const [newcity, setnewcity] = useState("");
  const [open, setOpen] = useState(false);
  const [adult, setadult] = useState(1);
  const [room, setroom] = useState(0);

  function search(e) {
    setcities(e.target.value);
    fetchData();
  }

  const fetchData = async () => {
    const where = encodeURIComponent(
      JSON.stringify({
        name: {
          $regex: cities,
        },
      })
    );
    const response = await fetch(
      `https://parseapi.back4app.com/classes/Pakistancities_City?limit=15&order=name&keys=name,country,location,muniSub&where=${where}`,
      {
        headers: {
          "X-Parse-Application-Id": "x9xcty5oaoSOZyI0IiSrIn1FVLbojriXQSJa0IjI", // This is your app's application id
          "X-Parse-REST-API-Key": "5vzBjaKPeP4xsteD3jRIfSy04teUzwTqRzk5KTza", // This is your app's REST API key
        },
      }
    );
    const { results } = await response.json();
    console.log(results);
    setgetCity(results);
  };
  function handleClose() {
    setOpen(false);
  }
  //showing up cities
  function selectOne(name) {
    setnewcity(name);
  }
  //return is here
  return (
    <div>
      {/* notice out that we have to show dialogues,toasters in front of the components */}
      {/* search bar */}
      <Dialog open={open} onClose={handleClose}>
        <Container style={{ width: "400px" }}>
          <DialogTitle>Choose Your Requirements</DialogTitle>

          <DialogContentText>
            {/* adults */}
            <Grid>
              <Grid container style={{ display: "flex" }}>
                <Typography style={{ flexGrow: "1" }}> Adults</Typography>
                <Box style={{ marginBottom: "20px" }}>
                  {adult === 0 ? (
                    <IconButton
                      disabled
                      style={{ border: "1px solid grey", borderRadius: "0px"}}
                    >
                      <Remove style={{fontSize:"15px"}}/>
                    </IconButton>
                  ) : (
                    <IconButton
                      onClick={() => setadult(adult - 1)}
                      style={{ border: "1px solid grey",  borderRadius: "0px" }}
                    >
                      <Remove style={{fontSize:"15px"}}/>
                    </IconButton>
                  )}
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  {adult}&nbsp;&nbsp;&nbsp;&nbsp;
                  <IconButton
                    onClick={() => setadult(adult + 1)}
                    style={{ border: "1px solid grey", borderRadius: "0px" }}
                  >
                    <Add style={{fontSize:"15px"}}/>
                  </IconButton>
                </Box>
              </Grid>
            </Grid>

            {/* Rooms */}

            <Grid style={{ display: "flex" }}>
              <Grid container component={Box}>
                <Typography style={{ flexGrow: "1" }}> Rooms</Typography>

                <Box>
                  {room === 0 ? (
                    <IconButton
                      disabled
                      style={{ border: "1px solid grey", borderRadius: "0px" }}
                    >
                      <Remove style={{fontSize:"15px"}}/>
                    </IconButton>
                  ) : (
                    <IconButton
                      onClick={() => setroom(room - 1)}
                      style={{ border: "1px solid grey", borderRadius: "0px" }}
                    >
                      <Remove style={{fontSize:"15px"}}/>
                    </IconButton>
                  )}
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  {room}&nbsp;&nbsp;&nbsp;&nbsp;
                  <IconButton
                    onClick={() => setroom(room + 1)}
                    style={{ border: "1px solid grey", borderRadius: "0px" }}
                  >
                    <Add style={{fontSize:"15px"}}/>
                  </IconButton>
                </Box>
              </Grid>
            </Grid>
          </DialogContentText>
        </Container>
      </Dialog>
      <Box
        style={{ background: grey[200], padding: "30px", marginBottom: "10px" }}
      >
        <Typography variant="h5" color="primary">
          Find deals on hotels, homes, and much more...
        </Typography>
        <Typography
          variant="body2"
          style={{ color: "grey", fontWeight: "lighter" }}
        >
          From cozy country homes to funky city apartments
        </Typography>
        <br />
        {/* location choose */}
        <input
          onChange={search}
          placeholder="Choose location"
          className={classes.settingWidth}
          type="text"
          style={{
            textTransform: "capitalize",
            // boxShadow: "1px 1px 5px blue",
            padding: "12px",
            border: "1px solid tomato",
          }}
        />
        <input
          placeholder="Check in"
          type="date"
          style={{
            textTransform: "capitalize",
            // boxShadow: "1px 1px 5px blue",
            padding: "10px",
            border: "1px solid tomato",
            width: "20%",
          }}
        />
        <input
          className={classes.settingWidth}
          hintText="Choose Date"
          type="date"
          style={{
            textTransform: "capitalize",
            // boxShadow: "1px 1px 5px blue",
            padding: "10px",
            border: "1px solid tomato",
            width: "20%",
          }}
        />
        <Button
          size="large"
          variant="outlined"
          style={{
            textTransform: "capitalize",
            backgroundColor: "white",
            border: "1px solid red",
            // boxShadow: "1px 1px 5px blue",
            borderRadius: "0px",
          }}
          onClick={() => setOpen(true)}
        >
          <Person />
          {adult} Adult &nbsp; <AccountBalance /> &nbsp;{room} Rooms &nbsp;
          <ExpandLess />
          <ExpandMore />
        </Button>

        <Button
          className={classes.resposive}
          color="secondary"
          size="large"
          variant="contained"
          onClick={() => fetchData()}
        >
          Search
        </Button>
        {newcity ? (
          <Container
            maxWidth="xs"
            style={{ marginLeft: "-50px", width: "60%" }}
          ></Container>
        ) : (
          <Typography variant="subtitle2" color="primary">
            No Location selected
          </Typography>
        )}
        {getCity.map((val, ind) => (
          <>
            <Container
              maxWidth="xs"
              component={Box}
              style={{ marginLeft: "-50px" }}
            >
              <MenuItem
                className={classes.resposiveShowCities}
                style={{ width: "80%" }}
                key={ind}
                button
                onClick={() => selectOne(val.name)}
              >
                <AddLocation color="secondary" /> {val.name}
              </MenuItem>
              <Divider />
            </Container>
          </>
        ))}
      </Box>
      <Divider /> <Divider />
      {/* Banner */}
      <Box style={{ border: "1px solid grey" }}>
        <Container maxWidth="lg">
          <img src={banner} alt="" width="100%" height="350px" />
        </Container>
      </Box>
    </div>
  );
};

export default Main;
