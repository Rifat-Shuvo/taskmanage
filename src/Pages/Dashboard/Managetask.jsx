import React from 'react';
import useAll from '../../Hooks/useAll';
import Task from '../../Componenets/Task';


const Managetask = () => {
  const [all, isLoading, refetch] = useAll()
  // {isLoading? console.log('loading') : console.log(all)}
  const todo = all.filter(item => item.status === 'todo')
  const ongoing = all.filter(item => item.status === 'ongoing')
  const completed = all.filter(item => item.status === 'completed')
  console.log(todo);
  const dragging = (e,id)=>{
    e.dataTransfer.setData(e,id)
    console.log('dragging', id);
  }
  const dragover = (e)=>{
    e.preventDefault(e)
  }

  const drop = (e)=>{
    e.dataTransfer.getData(id)
    console.log('dropping', id);
  }
  
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>

      {isLoading ? <><h1>please wait....</h1></> : 
      <>
      <div className='grid gap-3 grid-cols-1'>
        <h1 className='text-center font-bold text-blue-50 font-5xl'>Todo</h1>
      {
       
          todo.map(item =>
          <div key={item._id}>
                <div draggable onDragStart={(e)=>dragging(e,item._id)}>
                <Task item={item}></Task>
                </div>
              </div>
            )
      }
      </div>
      <div className='grid gap-3 grid-cols-1'>
      <h1 className='text-center font-bold text-blue-50 font-5xl'>Ongoing</h1>
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
      <div className='grid gap-3 grid-cols-1'>
      <h1 className='text-center font-bold text-blue-50 font-5xl'>Completed</h1>
      {
       
          completed.map(item =>
            
              <div key={item._id}>
                <div>
                <Task item={item}></Task>
                </div>
              </div>
           )
      }
      </div>
      </>
      }
    </div>
  );
};

export default Managetask;