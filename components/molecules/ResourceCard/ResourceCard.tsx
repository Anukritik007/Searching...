import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {
  ExpandMoreProps,
  ResourceCardProps,
} from "../../../interfaces/Interfaces";

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export const ResourceCard = ({ title, imgUrl, content }: ResourceCardProps) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

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
      <CardMedia
        component="img"
        height="150"
        image={imgUrl}
        alt="Resource preview"
      />
      <CardContent>
        <Typography
          variant="body2"
          className="bg-white dark:bg-black text-black dark:text-white"
          color="text.secondary"
        >
          {content}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon className="text-black dark:text-white" />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon className="text-black dark:text-white" />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon className="text-black dark:text-white" />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Comments:</Typography>
          <Typography paragraph>Good explanation and very helpful</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};
