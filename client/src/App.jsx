import React, { useEffect, useState } from "react";
import {
  Container,
  AppBar,
  Toolbar,
  Typography,
  Grow,
  Grid,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { getPosts } from "./actions/posts";

import CameraAltIcon from "@mui/icons-material/CameraAlt";
import memories from "./assets/images/Capture.png.jpg";
import Form from "./components/Form/Form";
import Posts from "./components/Posts/Posts";
import { createTheme } from "@mui/material/styles";

const App = () => {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  const theme = createTheme({
    typography: {
      fontFamily: ["Dancing Script", "cursive"].join(","),
    },
  });
  return (
    <Container maxwidth="lg">
      <AppBar
        position="static"
        color="inherit"
        sx={{ borderRadius: "8px", margin: "16px 0" }}
      >
        <Toolbar disableGutters>
          <CameraAltIcon fontSize="large" sx={{ mr: 2, ml: 2 }} />
          <Typography variant="h4" theme={theme} sx={{ fontWeight: 900 }}>
            Capture Your Moments
          </Typography>
        </Toolbar>
      </AppBar>
      <Form currentId={currentId} setCurrentId={setCurrentId} />
      <Posts setCurrentId={setCurrentId} />
    </Container>
  );
};

export default App;
