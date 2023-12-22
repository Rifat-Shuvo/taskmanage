import React from 'react';

const Contact = () => {
    return (
        <div>
            <h1 className='text-4xl text-blue-500 font-bold text-center my-10'>Contact Us Now</h1>
            <div className=' bg-[url("/Banner.jpg")] bg-cover min-h-screen flex justify-center items-center -mt-28'>
            <div className='bg-base-100 p-5 rounded-xl shadow-xl w-[31%]'>
                
                <form>
                    <label className='label'>
                        <span className='text-blue-500 font-medium'>Email:</span>
                    </label>
                    <input className='border border-blue-500 rounded-lg w-full p-3' type="email" name="email" id="" placeholder='Enter your email here' />
                    <label className='label'>
                        <span className='text-blue-500 font-medium'>
                            Message:</span>
                    </label>
                   <textarea className='p-3 border border-blue-500 rounded-lg' name="" id="" cols="40" placeholder='write Your Message / Suggetion / Complain / Advice please.' rows="8"></textarea>
                    
                    <div className='my-5 text-center'>
                    <button className='btn btn-primary rounded-full'>Send Now</button>
                    </div>
                    
                </form>
            </div>
        </div>  
        </div>
    );
};

export default Contact;