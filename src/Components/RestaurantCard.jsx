import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import Img1 from "../assets/images/food.png";
import { useNavigate } from "react-router-dom";

const ResturantCard = () => {
  const navigate = useNavigate()
  return (
    <Card sx={{ minWidth: 200, borderTopRadius:5 }} onClick={()=>navigate('/restaurant/burders&fast&food')}>
      <CardActionArea>
        <CardMedia component="img" height="95%" image={Img1} alt="image" />
        <CardContent sx={{height:'5%', display:'flex', flexDirection:'column', backgroundColor:'#FC8A06', color:"whitesmoke"}}>
          <Typography variant="p" sx={{fontWeight:'600', textAlign:'center'}}>
            Burgers & Fast Food
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ResturantCard;
