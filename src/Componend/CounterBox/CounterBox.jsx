import React from 'react';

const CounterBox = () => {
    return (
        <div className='max-w-[1350px] mx-auto mt-10 flex  gap-5'>
            <div className='h-[250px] bg-[#4A5556] w-full rounded-md shadow-lg flex justify-center items-center'>
                <div className='text-center text-white'>
                 <h1 className='text-4xl font-bold'>Pending</h1>
                 <p className='text-3xl font-medium'>0</p>
                </div>
            </div>
            <div className='h-[250px] bg-purple-600 w-full rounded-md shadow-lg flex justify-center items-center'>
                <div className='text-center text-white'>
                 <h1 className='text-4xl font-bold'>Submitted</h1>
                 <p className='text-3xl font-medium'>0</p>
                </div>
            </div>
            <div className='h-[250px] bg-green-600 w-full rounded-md shadow-lg flex justify-center items-center'>
                <div className='text-center text-white'>
                 <h1 className='text-4xl font-bold'>Reviewed</h1>
                 <p className='text-4xl font-medium'>0</p>
                </div>
            </div>
            
        </div>
    );
};

export default CounterBox;