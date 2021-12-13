import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import TextField from "@mui/material/TextField";

// components
import StudentsList from "./components/StudentsList";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        style={{
          backgroundColor: "white",
        }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            style={{
              color: "black",
            }}
          >
            News
          </Typography>
          <Button
            color="inherit"
            style={{
              color: "white",
              backgroundColor: "blue",
            }}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>

      <Box
        sx={{
          width: 1200,
          height: 300,
          margin: "auto",
          marginTop: "5%",
          marginBottom: "3%",
        }}
      >
        <TextField
          id="outlined-helper-text"
          label="Enter student name here"
          style={{
            width: 500,
            marginBottom: "3%",
          }}
        />

        <Box
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          <StudentsList />
        </Box>
      </Box>
    </Box>
  );
}
