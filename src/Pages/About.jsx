import React from 'react';

const About = () => {
    return (
        <div>
        <div className="h-[100vh] text-center opacity-75 grid bg-cover bg-[url('/Banner.jpg')]">
            <div className="col-start-1 row-start-1 bg-black bg-opacity-20 w-full h-full"></div>
            <div className="col-start-1 row-start-1 mx-auto my-auto">
                <h1 className='text-7xl font-bold mb-7 text-white'>About US</h1>
                <p className='text-white font-bold
             text-3xl mb-5 p-5'>Our site is absolute for the task management.  your data is our risk.  we don't share or selling your datas for others.  we use only necessaries cookies only. We have not to do any misinformation or oters things. We have the best platform for your task management.</p>
               
            </div>
        </div>
    </div>
    );
};

export default About;