import React from 'react';

const SimpleForm = () => {

     const handleSubmit =(event)=>{
        event.preventDefault()
        console.log( event.target.text.value)
        console.log(event.target.email.value)
     }


    return (
        <div className='mt-10'>
            <form onSubmit={handleSubmit}>
            <input className='border border-blue-400 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500' type="text" name='text' placeholder='type....'/>

            <br/>
            <br/>
          
             <br/>
             <br/>
             <input className='border  border-blue-400 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500' type="email" name="email" id="" placeholder='type email'/>

             <br/>
             <br/>
             <input className='border  border-blue-400 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500' type="submit" value="submit"/>
            </form>
        </div>
    );
};

export default SimpleForm;