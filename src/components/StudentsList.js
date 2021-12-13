import React, { useState, useEffect } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Modal_NewStudent from "./NewStudent";
import Modal_UpdateStudent from "./NewStudent";

function Entry({ student, index, update_student }) {
  console.log(index);
  return (
    <div
      style={{
        width: "18%",
        borderRadius: 5,
        border: "1px solid rgba(0, 0, 0, 0.1)",
        marginRight: "2%",
        marginLeft: "2%",
        marginBottom: "1%",
        padding: "1%",
      }}
    >
      <div
        style={{
          textAlign: "right",
        }}
      >
        <MoreVertIcon />
      </div>

      <div
        style={{
          textAlign: "center",
        }}
      >
        <img
          src={student.img}
          style={{
            width: 100,
            height: 100,
            borderRadius: 200,
          }}
        />
        <h2>{student.name}</h2>
        <p>{student.count}</p>
      </div>

      <div
        style={{
          display: "flex",
        }}
      >
        <div>
          <Button
            variant="contained"
            style={{
              width: "90%",
              display: "flex",
              flexDirection: "column",
              marginBottom: 10,
            }}
            onClick={() =>
              update_student(
                index,
                document.getElementById("count_add" + index).value * 1,
                true
              )
            }
          >
            Add
          </Button>
          <TextField
            id="outlined-helper-text"
            label=""
            defaultValue={"0"}
            style={{
              width: "90%",
            }}
            id={"count_add" + index}
          />
        </div>
        <div>
          <Button
            variant="contained"
            style={{
              width: "90%",
              display: "flex",
              flexDirection: "column",
              marginBottom: 10,
            }}
            onClick={() =>
              update_student(
                index,
                document.getElementById("count_subtract" + index).value * 1,
                false
              )
            }
          >
            Subtract
          </Button>
          <TextField
            id="outlined-helper-text"
            label=""
            defaultValue={"0"}
            style={{
              width: "90%",
              // marginBottom: "3%",
            }}
            id={"count_subtract" + index}
          />
        </div>
      </div>
    </div>
  );
}

export default function StudentsList() {
  const [NewStudentModal, setNewStudentModal] = useState(false);
  const [UpdateStudentModal, setUpdateStudentModal] = useState(false);
  const [refresh, setrefresh] = useState(true);
  const [List, setList] = useState([
    {
      name: "M Adil",
      count: 0,
      img: require("../assets/2.jpg").default,
    },
  ]);

  const add_student = (name, img) => {
    let data = List;
    data.push({
      name: name,
      count: 0,
      img: require("../assets/2.jpg").default,
    });
    setList(data);
    setNewStudentModal(NewStudentModal ? false : true);
  };

  const update_student = (index, count, add) => {
    let data = List;
    let filtered_item = data.filter((item, ind) => index == ind)[0];
    filtered_item.count = add
      ? filtered_item.count + count
      : filtered_item.count - count;
    // console.log(filtered_item.count, count);
    data[index] = filtered_item;
    setList(data);
    setrefresh(refresh ? false : true);
  };

  const New_std_btn = () => {
    return (
      <h1
        style={{
          width: "18%",
          height: 300,

          border: "1px solid rgba(0, 0, 0, 0.1)",

          borderRadius: 5,
          // border: "1px solid rgba(0, 0, 0, 0.1)",
          marginRight: "2%",
          marginLeft: "2%",
          marginBottom: "1%",
          padding: "1%",
          textAlign: "center",
          color: "rgb(100,100,100)",
          backgroundColor: "rgb(200,200,200)",
          lineHeight: 9,
        }}
        onClick={() => setNewStudentModal(true)}
      >
        +
      </h1>
    );
  };
  useEffect(() => {
    return (
      <>
        {List.map((item, index) => (
          <Entry
            student={item}
            index={index}
            update_student={(a, b, c) => update_student(a, b, c)}
          />
        ))}
        <New_std_btn />
        <Modal_NewStudent
          visible={NewStudentModal}
          toggle_visibility={() =>
            setNewStudentModal(NewStudentModal ? false : true)
          }
          add_student={(name, img) => add_student(name, "../assets/2.jpg")}
        />
        <Modal_UpdateStudent
          visible={UpdateStudentModal}
          toggle_visibility={() =>
            setNewStudentModal(UpdateStudentModal ? false : true)
          }
          update_student={(name, img) => add_student(name, "../assets/2.jpg")}
        />
      </>
    );
  }, [refresh]);
  return (
    <>
      {List.map((item, index) => (
        <Entry
          student={item}
          index={index}
          update_student={(a, b, c) => update_student(a, b, c)}
        />
      ))}
      <New_std_btn />
      <Modal_NewStudent
        visible={NewStudentModal}
        toggle_visibility={() =>
          setNewStudentModal(NewStudentModal ? false : true)
        }
        add_student={(name, img) => add_student(name, "../assets/2.jpg")}
      />
      <Modal_UpdateStudent
        visible={UpdateStudentModal}
        toggle_visibility={() =>
          setNewStudentModal(UpdateStudentModal ? false : true)
        }
        update_student={(name, img) => add_student(name, "../assets/2.jpg")}
      />
    </>
  );
}
