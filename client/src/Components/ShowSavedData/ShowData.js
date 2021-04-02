import React, { useEffect,useState } from "react";
import axios from "axios";
import Typography from '@material-ui/core/Typography'
import { Box } from "@material-ui/core";
const ShowData = () => {
  useEffect(() => {
    getData()
  }, []);
  const [state, setstate] = useState([])
  const getData = async() => {
    try {
        const {data} =await axios.get("http://localhost:1000/user/getData");
        setstate(data)
        //we have the response from the server
        console.log(data)
    
    } catch (error) {
      console.log(error);
    }
  };
  console.log(state.data)
  return( <div>
   <Box style={{textAlign:"center"}}>
   <Typography variant="h5" color="initial">Saved Data</Typography>
  { //we simply show our data here
     state.map((data)=>(
      <img src={data.image} alt=""/>
     ))
     }
   </Box>
  </div>);
};

export default ShowData;
