import React from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  Checkbox,
} from "@mui/material";

function ToDoList({ activities, handleCheckbox }) {
  return (
    <div className="todo-list">
      <List>
        {activities.map((item, index) => {
          return (
            <ListItem key={index} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Checkbox
                    checked={item.complete}
                    onChange={() => handleCheckbox(item.id)}
                    disableRipple
                  />
                </ListItemIcon>
                <ListItemText
                  primary={item.task}
                  className={item.complete && "isComplete"}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </div>
  );
}

export default ToDoList;
