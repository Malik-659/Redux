import React from "react";
import styles from "../index.module.css";
import { useDispatch } from "react-redux";
import { changeTodoStatus } from "../store/todoSlice";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);
const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  return (
    <li>
      <Card sx={{ width: 300, bgcolor:"lightgray", margin: 10}}>
        <CardContent>
          <Typography variant="h5" component="div">
            <input
              type="checkbox"
              onChange={() => dispatch(changeTodoStatus(todo.id))}
            />
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary" className={todo.status ? styles.completed : styles.undone}>
            adjective
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Delete</Button>
          <Button size="small">Edit</Button>
        </CardActions>
      </Card>
    </li>
  );
};

export default TodoItem;
