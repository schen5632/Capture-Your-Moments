import React from "react";
import Post from "./Post/Post";
import { Grid, CircularProgress } from "@mui/material";
import { useSelector } from "react-redux";

const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);

  console.log(posts);
  return (
    <Grid container alignItems="stretch" spacing={3} sx={{ marginTop: "16px" }}>
      {posts.map((post) => (
        <Grid key={post.id} item xs={12} sm={6} md={4} sx={{ padding: 0 }}>
          <Post post={post} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
