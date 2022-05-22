import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { ResourceCardProps } from "../../../interfaces/Interfaces";

export const ResourceCard = ({
  title,
  imgUrl,
  description,
}: ResourceCardProps) => {
  return (
    <Card
      sx={{ maxWidth: 345 }}
      className="bg-white dark:bg-black text-black dark:text-white"
    >
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={title}
        subheader="Sub-title"
      />
      {imgUrl && (
        <CardMedia
          component="img"
          height="150"
          image={imgUrl}
          alt="Resource preview"
        />
      )}
      <CardContent>
        <Typography
          variant="body2"
          className="bg-white dark:bg-black text-black dark:text-white"
          color="text.secondary"
        >
          {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon className="text-black dark:text-white" />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon className="text-black dark:text-white" />
        </IconButton>
      </CardActions>
    </Card>
  );
};
