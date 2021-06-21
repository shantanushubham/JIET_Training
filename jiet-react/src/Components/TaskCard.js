import React from "react";

const TaskCard = (props) => {
  const { task } = props;

  let dateFormatter = new Intl.DateTimeFormat("en-IN");

  return (
    <div className={"card"}>
      <div className={"content"}>
        <div className={"header"}>{task.taskName}</div>
        <div className={"meta"}>Friend</div>
        <div className={"meta"}>
          Due: {dateFormatter.format(new Date(task.taskDateTime))}
        </div>
        <div className={"description"}>{task.taskDescription}</div>
      </div>
    </div>
  );
};

export default TaskCard;
