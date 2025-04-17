import React from 'react';
import Myself from './Myself';
import Brother from './Brother';
import Sistter from './Sistter';

const Dad = () => {
    return (
        <div>
<h3 className='text-center'>dad</h3>
<section className='flex'>
    <div  className="border p-4 m-2 rounded bg-blue-100">
    <Myself></Myself>
    </div>
    <div  className="border p-4 m-2 rounded bg-blue-100">
    <Brother></Brother>

    </div>
    
    <div  className="border p-4 m-2 rounded bg-blue-100"> <Sistter></Sistter></div>
</section>
        </div>
    );
};

export default Dad;