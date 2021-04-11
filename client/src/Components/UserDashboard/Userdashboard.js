import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import { Box } from "@material-ui/core";
import Panel from "../UserPanel/Panel";

const Userdashboard = () => {
  const user = localStorage.getItem("user");
  const history = useHistory();
  useEffect(() => {
    if (user) {
      history.push("/userDashboard");
    }
    if(!user){
        history.push("/signin");
    }
  }, []);
  return (
    <div>
    <Panel/>
     <Box textAlign="center">
     <Typography variant="h5" color="secondary">
        Dashboard
      </Typography>
     </Box>
    </div>
  );
};

export default Userdashboard;
