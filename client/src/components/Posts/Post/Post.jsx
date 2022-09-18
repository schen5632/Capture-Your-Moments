import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Button,
  IconButton,
  Typography,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { createTheme } from "@mui/material/styles";
import moment from "moment";
import { useDispatch } from "react-redux";

import { red } from "@mui/material/colors";

import { deletePost, likePost } from "../../../actions/posts";

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  const theme = createTheme({
    typography: {
      fontFamily: ["Roboto", "sans-serif"].join(","),
    },
  });

  function edit() {
    setCurrentId(post._id);
  }

  function top() {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }
  return (
    <Card sx={{ borderRadius: "8px" }} theme={theme}>
      <CardHeader title={post.title} subheader={post.tags} />
      <CardMedia
        image={
          post.selectedFile ||
          "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
        }
        style={{ height: 0, paddingTop: "56.25%" }}
      />
      <CardContent>
        <Typography variant="caption">
          {post.likeCount} {post.likeCount === 1 ? " like" : " likes"}
        </Typography>
        <Typography>{post.message}</Typography>
        <Typography variant="caption">
          {moment(post.createdAt).fromNow()}
        </Typography>
      </CardContent>
      <CardActions disableSpacing={true}>
        <IconButton
          onClick={() => {
            dispatch(likePost(post._id));
          }}
          sx={{ color: red[500] }}
        >
          <FavoriteIcon />
        </IconButton>
        <IconButton
          sx={{ color: "black" }}
          onClick={() => {
            edit();
            top();
          }}
        >
          <EditOutlinedIcon />
        </IconButton>
        <IconButton
          sx={{ color: "black" }}
          onClick={() => dispatch(deletePost(post._id))}
        >
          <DeleteOutlinedIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Post;
