import React from 'react';
import Cousin from './Cousin';

const Uncal = () => {
    return (
        <div >
           <h3 className='text-center'>uncal....</h3> 
           <section>
            <div className='flex'>
            <div  className="border p-4 m-2 rounded bg-blue-100">
                <Cousin name='mega'></Cousin>
               
            </div>
            <div className='border p-4 m-2 rounded bg-blue-100'>
                <Cousin name='ryhn'></Cousin>
                </div>
            </div>
           </section>
        </div>
    );
};

export default Uncal;