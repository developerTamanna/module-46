import React from 'react';

const FormAction = () => {

const handleFormAction = (formData)=>{
    console.log(formData.get('text'))
    console.log(formData.get('email'))
}

    return (
        <div className='mt-10'>
        <form action={handleFormAction}>
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

export default FormAction;