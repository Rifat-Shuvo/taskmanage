import axios from 'axios';
import React, { useContext } from 'react';
import { AuthContext } from '../../providers/Authentication';
import Swal from 'sweetalert2';

const Addtask = () => {
    const {user} = useContext(AuthContext)
    const handleAdd = (e)=>{
        e.preventDefault()
        const form = e.target
        const title = form.title.value
        const priority = form.priority.value
        const deadline = form.deadlines.value
        const description = form.description.value
        const email = user.email
        const status = 'todo'
        const addinfo = {
            title, priority, deadline, email, status
        }
        axios.post('https://server-task-three.vercel.app/add', addinfo)
        .then(res=>{
            if (res.data.insertedId) {
                Swal.fire({
                    title: "Success",
                    text: "user created successfully!",
                    icon: "success"
                  }); 
                }
        })
        .catch(err=>{
            console.log(err);
        })
        // console.log(title,priority,deadline,description,email);
    }
    return (
        <div>
          <div className='bg-base-100 text-blue-700 p-5 rounded-xl shadow-xl '>
                <h1 className='text-center text-xl font-bold text-blue-500'> Please Add task Now</h1>
                <form onSubmit={handleAdd}>
                    <label className='label'>
                        <span className='text-blue-500 font-medium'>Title:</span>
                    </label>
                    <input className='border border-blue-500 rounded-lg w-full p-3' type="text" name="title" placeholder='Enter title here' required />
                    <label className='label'>
                        <span className='text-blue-500 font-medium'>Priority:</span>
                    </label>
                    <input className='border border-blue-500 rounded-lg w-full p-3' type="text" name="priority" placeholder='Enter priority here(Low, moderate, high)' />
                    <label className='label'>
                        <span className='text-blue-500 font-medium'>Deadline:</span>
                    </label>
                    <input className='border border-blue-500 rounded-lg w-full p-3' type="date" placeholder='select date' name="deadlines" />
                    <label className='label'>
                        <span className='text-blue-500 font-medium'>Description:</span>
                    </label>
                    <textarea className='p-3 border border-blue-500 rounded-lg' name="description" cols="40" placeholder='write Your description please.' rows="5"></textarea>
                   
                    <div className='my-5 text-center'>
                        <button className='btn btn-primary rounded-full'>Add Task</button>
                    </div>
                    
                </form>
            </div>
        </div>
    );
};

export default Addtask;