import React from 'react';
import Grandpa from './Grandpa';

const FamilyTree = () => {

  const asset = 'diamond';

    return (
        <div >
            <h2 className='text-center'>Family Tree</h2>
           <div className='border-2 border-orange-300 m-10 p-10 rounded-md'>
           <Grandpa></Grandpa>
           </div>
        </div>
    );
};

export default FamilyTree;