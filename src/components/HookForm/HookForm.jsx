import React from 'react';
import useInputfiled from '../../Hooks/useInputfiled';

const HookForm = () => {

   //useInput
   const [text, nameOneChange] = useInputfiled('')
   const [email, emailOnChange] =useInputfiled('')
   
   const [pass, passOnChange]=useInputfiled('')


    const handleSubmit = e =>{
        e.preventDefault();
        console.log(text, email,pass)
    }
    return (
        <div>
            <div>
             <div className='mt-10'>
        <form onSubmit={handleSubmit} >
        <input onChange={nameOneChange} className='border border-blue-400 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500' type="text" name='text' placeholder='type....' required/>

        <br/>
        <br/>
      
         <br/>
         <br/>
         <input onChange={emailOnChange} className='border  border-blue-400 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500' type="email" name="email" placeholder='type email ' required/>

         <br/>
         <br/>
         <input onChange={passOnChange}  className='border  border-blue-400 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500' type="password" name="password"  placeholder='enter your password'  required/>
         <br/>
         <br/>
         {/* <span>{error}</span> */}
         <br/>
         <br/>

         <input className='border  border-blue-400 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500' type="submit" value="submit"/>
        </form>
    </div>
        </div>
        </div>
    );
};

export default HookForm;