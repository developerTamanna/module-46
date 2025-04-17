import React, { useState } from 'react';

const useInputfiled = (defaultValue) => {

    const [fieldValue, setFieldValue] = useState(defaultValue)
        const handleFieldOnChange =(event)=>{
        setFieldValue(event.target.value)
        }
    return [fieldValue, handleFieldOnChange]
};

export default useInputfiled;