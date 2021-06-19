import React from "react";

const TaskCard = (props) => {
  const { task } = props;
  return (
    <div className={"card"}>
      <div className={"content"}>
        <div className={"header"}>{task.taskName}</div>
        <div className={"meta"}>Friend</div>
        <div className={"description"}>Description</div>
      </div>
    </div>
  );
};

export default TaskCard;
