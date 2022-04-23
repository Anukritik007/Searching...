import { IconButtonProps } from "@mui/material/IconButton";

export interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

export interface ResourceCardProps {
  title: string;
  imgUrl: string;
  content: string;
}
