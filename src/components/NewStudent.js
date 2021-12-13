import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function Modal_NewStudent({
  visible,
  toggle_visibility,
  add_student,
}) {
  const [open, setOpen] = React.useState(false);
  let image = require("../assets/2.jpg").default;

  return (
    <Modal open={visible} onClose={toggle_visibility}>
      <Box sx={style}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p>New Student</p>
          <p onClick={toggle_visibility} style={{ cursor: "pointer" }}>
            &#10060;
          </p>
        </div>

        <div
          style={{
            textAlign: "center",
          }}
        >
          <img
            src={image}
            style={{
              borderRadius: 200,
              width: 100,
            }}
          />
        </div>

        <div
          style={{
            border: `1px solid rgba(0,0,0,.3)`,
            borderRadius: 3,
            padding: 10,
            width: "95%",
            marginTop: 10,
            marginBottom: 10,
          }}
        >
          <input id={"file"} type="file" />
        </div>

        <input
          type="text"
          style={{
            border: `1px solid rgba(0,0,0,.3)`,
            borderRadius: 3,
            padding: 10,
            width: "95%",
          }}
          id={"name"}
        />

        <div
          style={{
            textAlign: "right",
            padding: "1%",
          }}
        >
          <Button
            onClick={() =>
              add_student(document.getElementById("name").value, "")
            }
            variant="contained"
            style={{
              //   width: "90%",
              //   display: "flex",
              flexDirection: "column",
              marginBottom: 10,
              marginRight: 10,
            }}
          >
            Add
          </Button>

          <Button
            onClick={toggle_visibility}
            variant="contained"
            style={{
              //   width: "90%",
              //   display: "flex",
              flexDirection: "column",
              marginBottom: 10,
            }}
          >
            Cancel
          </Button>
        </div>
      </Box>
    </Modal>
  );
}
