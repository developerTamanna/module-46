import React, { useState } from 'react';

const ControlledFiled = () => {

//error
const [error, setError]=useState('')

// const handleError = ()=>{
    
// }
//password function

const [password, setPassword]= useState('')

//*
 const handlePasswordChange = (e)=>{

    console.log(e.target.value);
       setPassword(e.target.value);
        if(password.length < 8){
        setError('8 character must be type')
    }
    else{
        setError('')
       
    }
       


 }

//error handling

    


//next
    const handleSubmit =(e)=>{
        e.preventDefault()
        console.log('submit')
    }
    return (
        <div>
             <div className='mt-10'>
        <form onSubmit={handleSubmit}>
        <input className='border border-blue-400 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500' type="text" name='text' placeholder='type....' required/>

        <br/>
        <br/>
      
         <br/>
         <br/>
         <input className='border  border-blue-400 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500' type="email" name="email" placeholder='type email ' required/>

         <br/>
         <br/>
         <input onChange={handlePasswordChange} className='border  border-blue-400 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500' type="password" name="password"  placeholder='enter your password' defaultValue={password} required/>
         <br/>
         <br/>
         <span>{error}</span>
         <br/>
         <br/>

         <input className='border  border-blue-400 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500' type="submit" value="submit"/>
        </form>
    </div>
        </div>
    );
};

export default ControlledFiled;