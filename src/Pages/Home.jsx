import React from 'react';
import Banner from '../Componenets/Banner';
import Card from '../Componenets/Card';

const Home = () => {
    return (
        <div className='w-screen'>
        <Banner></Banner>
        <h1 className='text-3xl font-bold my-11 text-blue-600 text-center'>Who Should Use?</h1>
        <div className='p-5 m-5 grid gap-8 grid-cols-1 md:grid-cols-2'>
            <Card title={'Programmers'} description={'Programmer can use it very simultaneous way.  because it was the best to design for to maintain and manage Their work and their task.they able to do the best task manage by this sites.  They have able to track record of their completed, pending and Todo task.  the have able to maintain their taask in simultaneous weay.'}/>
            <Card title={'Developers'} description={'Developerr can use it very simultaneous way.  because it was the best to design for to maintain and manage Their work and their task.they able to do the best task manage by this sites.  They have able to track record of their completed, pending and Todo task.  the have able to maintain their taask in simultaneous weay.'}/>
            <Card title={'Software Engineers'} description={'Software Engineer can use it very simultaneous way.  because it was the best to design for to maintain and manage Their work and their task.they able to do the best task manage by this sites.  They have able to track record of their completed, pending and Todo task.  the have able to maintain their taask in simultaneous weay.'}/>
            <Card title={'UI/UX Designers'} description={'UI/UX Designers can use it very simultaneous way.  because it was the best to design for to maintain and manage Their work and their task.they able to do the best task manage by this sites.  They have able to track record of their completed, pending and Todo task.  the have able to maintain their taask in simultaneous weay.'}/>
            <Card title={'Web Designers'} description={'Web Designers can use it very simultaneous way.  because it was the best to design for to maintain and manage Their work and their task.they able to do the best task manage by this sites.  They have able to track record of their completed, pending and Todo task.  the have able to maintain their taask in simultaneous weay.'}/>
            <Card title={'Bankers'} description={'Bankers can use it very simultaneous way.  because it was the best to design for to maintain and manage Their work and their task.they able to do the best task manage by this sites.  They have able to track record of their completed, pending and Todo task.  the have able to maintain their taask in simultaneous weay.'}/>
        </div>
        </div>  
    );
};

export default Home;