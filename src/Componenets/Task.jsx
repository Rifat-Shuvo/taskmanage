import React from 'react';

const Task = ({item}) => {
    const {title, priority, status, _id, deadline} = item
    return (
        <div className="card bg-primary text-primary-content">
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>status: {status}</p>
    <p>Priority: {priority}</p>
    <p>Deadline: {deadline}</p>
  </div>
</div>
    );
};

export default Task;