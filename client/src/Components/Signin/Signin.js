import React, { useState, useEffect } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useHistory } from "react-router-dom";
import {
  Box,
  Input,
  Typography,
  Button,
  Divider,
  Container,
  Paper
} from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { pink } from "@material-ui/core/colors";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import { ClipLoader } from "react-spinners";
const font = "'Crimson Pro', serif;"

const Signin = () => {
  const [state, setstate] = useState();
  const [loading, setloading] = useState(false);
  const history = useHistory();
  const user = localStorage.getItem("user");
  useEffect(() => {
    if (user) {
      history.push("/userDashboard");
    }
  }, []);
  //signin
  const userSignsin = async () => {
    setloading(true);
    const { data } = await axios.post(
      "http://localhost:1000/user/signin",
      state
    );
    setloading(false);
    if (data.success) {
      localStorage.setItem("user", data.user);
      toast.success("Thanks for login");
      window.location.reload();
    }
    if (data.err) {
      toast.error("Invalid email or passoword");
    }
  };

  return (
    <div>
      <Container maxWidth="sm">
        <Toaster />
        <Paper elevation={5}>
          <Box mt={5} textAlign="center">
            <Box>
              <AccountCircleIcon
                style={{ color: pink[500], width: "50px", height: "50px" }}
              />
            </Box>
            <Typography variant="h4" color="primary">
              Sign in ..
            </Typography>
            <Divider />
            <br />
            <Input
              onChange={(e) => setstate({ ...state, email: e.target.value })}
              type="email"
              endAdornment={<MailOutlineIcon color="primary"/>}
              placeholder="Enter Email"
              style={{ marginBottom: "10px" }}
              required="true"
            />
            <br />
            <Input
              onChange={(e) => setstate({ ...state, password: e.target.value })}
              endAdornment={<VisibilityOffIcon color="primary" />}
              type="password"
              placeholder="Enter Password"
            />
            <br />
            <br />
            {loading ? (
              <Box>
                <ClipLoader color="blue" />
              </Box>
            ) : (
              <Button
                style={{ marginBottom: "10px" }}
                color="primary"
                variant="contained"
                onClick={userSignsin}
              >
                Sign in
              </Button>
            )}
            <br />
            <Typography variant="body1h1" color="initial">
              Not Already have an account?
            </Typography>{" "}
            &nbsp;
            <Button
              color="primary"
              size="small"
              variant="outlined"
              style={{ marginBottom: "10px" }}
              onClick={() => history.push("/signup")}
            >
              Sign up
            </Button>
          </Box>
        </Paper>
      </Container>
    </div>
  );
};

export default Signin;
