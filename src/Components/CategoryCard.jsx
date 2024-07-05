import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import Img1 from "../assets/images/food.png";

const Category = ({width=200}) => {
  return (
    <Card sx={{ width: width, borderTopRadius:5}}>
      <CardActionArea>
        <CardMedia component="img" height="95%" image={Img1} alt="image" />
        <CardContent sx={{height:'auto', display:'flex', flexDirection:'column', backgroundColor:'#03081F', color:"whitesmoke"}}>
          <Typography variant="p" sx={{color:'#FC8A06', fontWeight:'600', fontSize:'13px'}}>
            Burgers & Fast Food
          </Typography>
          <Typography variant="body2" sx={{fontSize:12}}>
            21 Resturants
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Category;
