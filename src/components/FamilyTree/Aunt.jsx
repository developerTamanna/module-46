import React from 'react';
import Cousin from './Cousin';

const Aunt = () => {
    return (
<div>
<h3>aunt</h3>
<section>
<div className='flex'>
<div className='border p-4 m-2 rounded bg-blue-100'>
<Cousin name='rota'></Cousin>
</div>
<div className='border p-4 m-2 rounded bg-blue-100'>
<Cousin name='pota'></Cousin>
</div>
</div>
            </section>
        </div>
    );
};

export default Aunt;