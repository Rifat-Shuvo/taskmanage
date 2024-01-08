import axios from 'axios';
import React from 'react';
import Swal from 'sweetalert2';
import useAll from '../Hooks/useAll';

const Task = ({item}) => {
  const [,,refetch] = useAll()
    const {title, priority, status, _id, deadline} = item
    const handleDeleteTask = (id)=>{
      console.log(id);
     // axios.delete(`https://server-task-three.vercel.app/todo/${id}`, id)

      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          axios.delete(`https://server-task-three.vercel.app/todo/${id}`, id)
            .then(res=>{
              if (res) {
                Swal.fire({
                  title: "Deleted!",
                  text: "Your file has been deleted.",
                  icon: "success"
                });
                refetch()
              }
            })
            .catch(err=>console.log(err))
         
        }
      });
    }
    return (
        <div className="card bg-primary text-primary-content">
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>status: {status}</p>
    <p>Priority: {priority}</p>
    <p>Deadline: {deadline}</p>
    <div><button onClick={()=>{handleDeleteTask(_id)}} className='btn btn-error'>Delete Task</button></div>
  </div>
</div>
    );
};

export default Task;