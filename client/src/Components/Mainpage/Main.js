import React, { useState } from "react";
import axios from "axios"
import {
  Box,
  Button,
  Container,
  Grid,
  Input,
  Typography,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
  Paper,
} from "@material-ui/core";

const Main = () => {
  const fetchapi = () => {
    fetchApi();
  };
  const [search, setsearch] = useState("");
  const [state, setstate] = useState([]);
  const fetchApi = () => {
    fetch(
      `https://api.unsplash.com/photos/?client_id=aD1qli23hyAk8Dhh4ES2sEC-94SDGg2eM6R0SVlzd6o&query=${search}`
    )
      .then((res) => res.json())
      .then((res) => setstate(res))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Container maxWidth="sm">
        <Box textAlign="center">
          <Input
            placeholder="Search wallpapers..."
            onChange={(e) => {
              setsearch(...search, e.target.value);
            }}
          />
          <Button
            size="small"
            variant="contained"
            color="primary"
            onClick={fetchapi}
          >
            Search
          </Button>
        </Box>
        <br />
        {state.map((data) => (
          <Grid container spacing="3">
            <Grid item xs={6}>
              <Paper>
                <Card>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      alt="Contemplative Reptile"
                      height="140"
                      image={data.urls.regular}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        wallpapers
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        The most stunning rivers in the world can now decorate
                        your screen. Developer's Description. App Description
                        Backgrounds
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button
                      onClick={()=>axios.post("http://localhost:1000/user/saveData",{image:data.urls.regular}).then(alert("Data saved succeed"))}
                      variant="contained"
                      size="small"
                      color="primary"
                    >
                      save
                    </Button>
                    <Button variant="outlined" size="small" color="primary">
                      Share
                    </Button>
                  </CardActions>
                </Card>
              </Paper>
            </Grid>
          </Grid>
        ))}
      </Container>
    </div>
  );
};

export default Main;
