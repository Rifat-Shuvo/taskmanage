import React from 'react';
import useAll from '../../Hooks/useAll';
import Task from '../../Componenets/Task';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import axios from 'axios';
import Swal from 'sweetalert2';


const Managetask = () => {
  const [all, isLoading, refetch] = useAll()
  // {isLoading? console.log('loading') : console.log(all)}
  const todo = all.filter(item => item.status === 'todo')
  const ongoing = all.filter(item => item.status === 'ongoing')
  const completed = all.filter(item => item.status === 'completed')
  console.log(todo);
  // const dragging = (e,id)=>{
  //   e.dataTransfer.setData(e,id)
  //   console.log('dragging', id);
  // }
  // const dragover = (e)=>{
  //   e.preventDefault(e)
  // }

  // const drop = (e)=>{
  //   e.dataTransfer.getData(id)
  //   console.log('dropping', id);
  // }
  
  const handleOnDragEnd =(result) =>{
    console.log(result);
    const id = result.draggableId
    const status = result.destination.droppableId
    if (result.destination.droppableId === 'ongoing') {
      axios.patch(`https://server-task-three.vercel.app/ongoing/${id}`, status)
      .then(res=>{
        if (res) {
          Swal.fire({
            title: "Success",
            text: "task updated to ongoing successfully!",
            icon: "success"
          }); 
          refetch()
        }
      })
    }
    if (result.destination.droppableId === 'completed') {
      axios.patch(`https://server-task-three.vercel.app/completed/${id}`, status)
      .then(res=>{
        if (res) {
          Swal.fire({
            title: "Success",
            text: "task updated to completed successfully!",
            icon: "success"
          }); 
          refetch()
        }
      }) 
    }
    if (result.destination.droppableId === 'todo') {
      axios.patch(`https://server-task-three.vercel.app/todo/${id}`, status)
      .then(res=>{
        if (res) {
          Swal.fire({
            title: "Success",
            text: "task updated to todo successfully!",
            icon: "success"
          }); 
          refetch()
        }
      })
    }
  }

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>

    <div className='grid grid-cols-1 md:grid-cols-3 gap-11'>

      {isLoading ? <><h1>please wait....</h1></> : 
      <>
      <Droppable droppableId='todo'>
        {(provided)=>(
        
        <div
        ref={provided.innerRef}
        {...provided.droppableProps}
        className='grid gap-3 grid-cols-1 bg-white p-3 rounded-lg'>
        <h1 className='text-center font-bold text-blue-500 font-5xl'>Todo</h1>
      {
       
          todo.map((item, index) =>
            <Draggable key={item._id} draggableId={item._id} index={index}>
              {(provided)=>(

          <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                <div>
                <Task item={item}></Task>
                </div>
              </div>
              )}
            </Draggable>
            )
      }
      {provided.placeholder}
      </div>
    
        )}
      </Droppable>
      <Droppable droppableId='ongoing'>
        {(provided)=>(
        
        <div
        ref={provided.innerRef}
        {...provided.droppableProps}
        className='grid gap-3 grid-cols-1 bg-white p-3 rounded-lg'>
        <h1 className='text-center pb-10 font-bold text-blue-500 font-5xl'>Ongoing</h1>
      {
       
          ongoing.map((item, index) =>
            <Draggable key={item._id} draggableId={item._id} index={index}>
              {(provided)=>(

          <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                <div>
                <Task item={item}></Task>
                </div>
              </div>
              )}
            </Draggable>
            )
      }
      {provided.placeholder}
      </div>
    
        )}
      </Droppable>
      <Droppable droppableId='completed'>
        {(provided)=>(
        
        <div
        ref={provided.innerRef}
        {...provided.droppableProps}
        className='grid gap-3 grid-cols-1 bg-white p-3 rounded-lg'>
        <h1 className='text-center pb-10 font-bold text-blue-500 font-5xl'>Completed</h1>
      {
       
          completed.map((item, index) =>
            <Draggable key={item._id} draggableId={item._id} index={index}>
              {(provided)=>(

          <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                <div>
                <Task item={item}></Task>
                </div>
              </div>
              )}
              
            </Draggable>
            )
      }
      {provided.placeholder}
      </div>
    
        )}
      </Droppable>
      
      
      {/* <div className='grid gap-3 grid-cols-1  bg-white p-3 rounded-lg'>
      <h1 className='text-center font-bold text-blue-500 font-5xl'>Ongoing</h1>
      {
      
          ongoing.map(item =>
            
              <div key={item._id}>
                <div droppable onDragOver={(e)=>dragover(e)} onDrop={(e)=>drop(e)}>
                <Task item={item}></Task>
                </div>
              </div>
            )
      }
      </div>
      <div className='grid gap-3 grid-cols-1  bg-white p-3 rounded-lg'>
      <h1 className='text-center font-bold text-blue-500 font-5xl'>Completed</h1>
      {
       
          completed.map(item =>
            
              <div key={item._id}>
                <div>
                <Task item={item}></Task>
                </div>
              </div>
           )
      }
      </div> */}
      </>
      }
    </div>
    </DragDropContext>
  );
};

export default Managetask;