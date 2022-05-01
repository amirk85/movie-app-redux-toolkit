import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import "./MovieCard.css";
import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
  const { Poster, Title, Year, imdbID } = movie;

  return (
    <Link to={`/movie/${imdbID}`}>
      <Card className="card_container" sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia component="img" height="550" image={Poster} alt={Title} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {Title}
            </Typography>
            <hr />
            <Typography className="card_year" variant="body2" color="#f5f5f1">
              {Year}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
}
