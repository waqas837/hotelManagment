import React, { useEffect, useState } from "react";
import { pink, grey } from "@material-ui/core/colors";
import logo from "../../images/logo.png";
import { Update, Check, HelpOutline, LockOutlined } from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import axios from "axios";
import {
  IconButton,
  Box,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  Paper,
  TableBody,
  Container,
  Typography,
  Divider,
  Dialog,
  Button,
  Input,
  DialogContentText,
  DialogTitle,
  makeStyles,
  AppBar,
  Toolbar,
} from "@material-ui/core";
import { Edit, Delete, Close } from "@material-ui/icons";
import toast, { Toaster } from "react-hot-toast";
const useStyles = makeStyles((theme) => ({
  root: {},
  // menuButton: {
  //   marginRight: theme.spacing(2),
  // },
  title: {
    marginRight: "auto",
    fontWeight: "bold",
  },
  titleTwo: {
    color: "white",
    fontStyle: "bold",
    fontWeight: "bold",
    [theme.breakpoints.down("sm")]: {
      fontSize: "90%",
    },
  },
  alignLeft: {
    textAlign: "left",
  },
  appBar: {
    marginBottom: "5px",
  },

  resposive: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  hover: {
    "&:hover": {
      background: grey[200],
    },
  },
}));

const Admin = () => {
  const classes = useStyles();
  const history = useHistory();
  useEffect(() => {
    getData();
  }, []);
  const [state, setstate] = useState([]);
  const [stateS, setstateS] = useState([]);
  const [loadingS, setloadingS] = useState(false);
  const [opentwo, setOpentwo] = useState(false);
  const [id, setid] = useState();
  const [update, setupdate] = useState();

  // getall data
  //notice that data which is coming from the backend is always inside an object
  //show full list data get
  const getData = async () => {
    const { data } = await axios.get("http://localhost:1000/user/getData");
    setstate(data.data);
  };
  //   array of an object
  function handleCloseTwo() {
    setOpentwo(false);
  }
  async function edit(id) {
    setOpentwo(true);
    setid(id);
    const { data } = await axios.get(
      `http://localhost:1000/user/findSingleUser/${id}`
    );
    // console.log(data.data);
    const totalData = data.data;
    setupdate(totalData);
  }
  // UPDATE User
  async function updateUser() {
    setloadingS(true);
    const { data } = await axios.put(
      `http://localhost:1000/user/udpateUser/${id}`,
      stateS
    );
    const userConfirmed = data.data.email;
    if (userConfirmed) {
      toast.success("User updated succeed");
      setloadingS(false);
      window.location.reload();
    }
  }

  //DELETE USER
  async function delet(id) {
    const { data } = await axios.delete(
      `http://localhost:1000/user/deleteUser/${id}`
    );
    console.log(data.success);
    if (data.success) {
      toast.success("User deleted");
      localStorage.removeItem("user");
      window.location.reload();
    }
  }
  return (
    <div>
      <Toaster />
      <AppBar position="static" color="inherit" className={classes.appBar}>
        <Toolbar>
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
           <MenuIcon />
         </IconButton> */}
          <Button
            style={{ width: "20%" }}
            size="small"
            onClick={() => history.push("/")}
            className={classes.title}
          >
            <Typography
              variant="h6"
              color="secondary"
              style={{ color: "hotpink" }}
              className={classes.titleTwo}
            >
              <img width="30%" src={logo} alt="" />
            </Typography>
          </Button>
          {/* 1 Box */}
          <Box m={1}>
            <IconButton className={classes.hover}>
              <HelpOutline style={{ color: "white", marginRight: "auto" }} />
            </IconButton>
          </Box>
          <Button color="secondary" variant="contained">
            <LockOutlined /> &nbsp; Admin only
          </Button>
          &nbsp;
        </Toolbar>
      </AppBar>
      <Dialog
        onClose={handleCloseTwo}
        aria-labelledby="simple-dialog-title"
        open={opentwo}
      >
        <Toaster />
        <DialogTitle>
          <IconButton
            style={{ padding: "0px" }}
            onClick={() => setOpentwo(false)}
          >
            <Close />
          </IconButton>
        </DialogTitle>
        <DialogContentText>
          <Box mb={1} mt={1}>
            <Typography
              variant="h4"
              color="primary"
              style={{ textAlign: "center" }}
            >
              Update User
            </Typography>
          </Box>
          <Divider />

          <Container
            maxWidth="md"
            style={{ paddingLeft: "70px", paddingRight: "70px" }}
          >
            <Box mt={1} textAlign="center">
              <Box>
                <Update
                  style={{ color: pink[440], width: "50px", height: "50px" }}
                />
              </Box>
              <Divider />
              <br />

              {update === undefined ? (
                <ClipLoader />
              ) : (
                <>
                  <Input
                    onChange={(e) =>
                      setstateS({ ...stateS, email: e.target.value })
                    }
                    type="email"
                    placeholder="Update User Email"
                    style={{ marginBottom: "10px" }}
                    defaultValue={update.email}
                    required="true"
                  />
                  <br />
                  <Input
                    onChange={(e) =>
                      setstateS({ ...stateS, password: e.target.value })
                    }
                    type="password"
                    placeholder="Update Password"
                    style={{ marginBottom: "10px" }}
                    defaultValue={update.password}
                    required="true"
                  />
                  <br />
                  <Input
                    onChange={(e) =>
                      setstateS({ ...stateS, cpassword: e.target.value })
                    }
                    defaultValue={update.cpassword}
                    type="password"
                    placeholder="Update Confirm Password"
                  />
                </>
              )}

              <br />
              <br />
              {loadingS ? (
                <Box>
                  <ClipLoader color="blue" />
                </Box>
              ) : (
                <Button
                  style={{ marginBottom: "10px" }}
                  color="primary"
                  variant="contained"
                  onClick={updateUser}
                >
                  <Check /> Update User
                </Button>
              )}
            </Box>
          </Container>
        </DialogContentText>
      </Dialog>
      <Container maxWidth="sm" component={Box} my={3}>
        <Typography variant="h4" color="primary" component={Box}>
          Admin Panel
        </Typography>
        <Divider />
      </Container>
      <Container style={{ width: "70%" }} maxWidth="md">
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell style={{ fontWeight: "bolder" }}>ID</TableCell>
                <TableCell style={{ fontWeight: "bolder" }} align="center">
                  Email
                </TableCell>
                <TableCell style={{ fontWeight: "bolder" }} align="center">
                  Password
                </TableCell>
                <TableCell style={{ fontWeight: "bolder" }} align="center">
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {state.map((row) => (
                <TableRow>
                  <TableCell>{row._id}</TableCell>
                  <TableCell align="center">{row.email}</TableCell>
                  <TableCell align="center">{row.password}</TableCell>
                  <TableCell align="center">
                    <IconButton onClick={() => edit(row._id)}>
                      <Edit color="primary" />
                    </IconButton>
                    <IconButton onClick={() => delet(row._id)}>
                      <Delete color="secondary" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </div>
  );
};

export default Admin;
