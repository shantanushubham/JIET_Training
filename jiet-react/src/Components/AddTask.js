import React, { useState } from "react";
import Axios from "axios";

const AddTask = (props) => {
  const [task, setTask] = useState({});
  const { tasks, setTasks, user, setScreenType } = props;

  const onAddTaskClick = async (e) => {
    e.preventDefault();
    console.log("Date Type", typeof task.taskDateTime);
    await Axios.post("http://localhost:7000/task", {
      ...task,
      userId: user._id,
    })
      .then(({ data: addedTask }) => {
        window.alert("Task successfully added.");
        setTasks([...tasks, addedTask]);
        setTimeout(() => {
          setScreenType("SHOW");
        }, 3000);
      })
      .catch((error) => {
        console.error("Error occurred", error);
      });
  };

  return (
    <>
      <form
        onKeyPress={(e) => {
          e.key === 13 && onAddTaskClick(e);
        }}
      >
        <div className={"field"}>
          <label>Task Details</label>
          <div className={"two fields"}>
            <div className={"field"}>
              <input
                type={"text"}
                placeholder={"Task Name*"}
                onChange={(e) => {
                  setTask({ ...task, taskName: e.target.value });
                }}
              />
            </div>
            <div className={"field"}>
              <input
                type={"text"}
                placeholder={"Task Description*"}
                onChange={(e) => {
                  setTask({ ...task, taskDescription: e.target.value });
                }}
              />
            </div>
          </div>
        </div>
        <div className={"field"}>
          <label>Task Due Date</label>
          <div className={"two fields"}>
            <div className={"field"}>
              <input
                type={"datetime-local"}
                onChange={(e) => {
                  setTask({
                    ...task,
                    taskDateTime: Date.parse(e.target.value),
                  });
                }}
              />
            </div>
          </div>
        </div>
        <button class="ui primary button" onClick={onAddTaskClick}>
          Add Task
        </button>
      </form>
      <div class="ui basic modal">
        <div class="ui icon header">
          <i class="archive icon"></i>
          Archive Old Messages
        </div>
        <div class="content">
          <p>
            Your inbox is getting full, would you like us to enable automatic
            archiving of old messages?
          </p>
        </div>
        <div class="actions">
          <div class="ui red basic cancel inverted button">
            <i class="remove icon"></i>
            No
          </div>
          <div class="ui green ok inverted button">
            <i class="checkmark icon"></i>
            Yes
          </div>
        </div>
      </div>
    </>
  );
};

export default AddTask;
