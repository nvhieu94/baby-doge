import React from "react";
import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export interface IMediaCardProps {
  item: any;
}

const MediaCard = (props: IMediaCardProps) => {
  const { item } = props;
  return (
    <Box>
      <Card sx={{padding:'0 20px 0 20px', backgroundColor:'#141245', boxShadow:'none'}}>
        <CardMedia
          component="img"
          height="247"
          width='280'
          image={item.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" color={'#fff'} component="div">
            {item.title}
          </Typography>
          <Typography variant="body2" color={'#fff'}>
            {item.description}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default MediaCard;
