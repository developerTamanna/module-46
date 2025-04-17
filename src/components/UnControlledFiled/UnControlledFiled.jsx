import React, { useRef } from 'react';

const UnControlledFiled = () => {

    const emailRef = useRef('');
    const passRef = useRef('')

  const handleSUbmit = (e)=>{
    e.preventDefault()
    console.log(emailRef.current.value)
    console.log(passRef.current.value)
  }



    return (
        <div>
            <div>
             <div className='mt-10'>
        <form  onSubmit={handleSUbmit}>
        <input className='border border-blue-400 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500' type="text" name='text' placeholder='type....' required/>

        <br/>
        <br/>
      
         <br/>
         <br/>
         <input ref={emailRef} className='border  border-blue-400 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500' type="email" name="email" placeholder='type email ' required/>

         <br/>
         <br/>
         <input ref={passRef} className='border  border-blue-400 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500' type="password" name="password"  placeholder='enter your password'  required/>
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

export default UnControlledFiled;