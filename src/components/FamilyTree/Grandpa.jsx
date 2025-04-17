import React from 'react';
import Dad from './Dad';
import Uncal from './Uncal';
import Aunt from './Aunt';

const Grandpa = () => {
    return (
<div>
<div>
    <h2 className='text-center p-2'>Grandpa</h2>
    <section className='flex gap-4'>
        <div  className="border p-4 m-2 rounded bg-blue-100">
        <Dad >
             </Dad>
        </div>
        <div  className="border p-4 m-2 rounded bg-blue-100">
        <Uncal></Uncal>

        </div>
        <div  className="border p-4 m-2 rounded bg-blue-100">
        <Aunt></Aunt>
        </div>
    </section>
</div>
</div>
    );
};

export default Grandpa;