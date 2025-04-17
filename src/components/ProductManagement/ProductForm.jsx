import React, { useState } from 'react';

const ProductForm = ({ handleAddProduct }) => {
      const [error, setError] = useState('')
    const handleProductSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const price = e.target.price.value;
        const quantity = e.target.quantity.value;

          //validation
            
        if(name.length === 0){
            setError('please provide a product name')
            return;
        }
        else if(price.length===0){
            setError('please write your products price')
            return;
        }
        else if(price <0){
            setError('please enter a valid price')
            return;
        }
        else{
            setError('')
        }

          //next

        const newProduct = {
            name,
            price,
            quantity
        }
        handleAddProduct(newProduct);
        e.target.reset(); 
    }

    return (
<div className="flex justify-center items-center min-h-screen bg-gray-100">
<div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
<h3 className="text-2xl font-semibold text-center text-blue-500 mb-6">Add a New Product</h3>

<form onSubmit={handleProductSubmit} className="space-y-4">

<input 
    className="w-full border border-blue-400 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
    type="text" 
    name="name" 
    placeholder="Product Name..." 
    required 
/>

<input 
    className="w-full border border-blue-400 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
    type="text" 
    name="price" 
    placeholder="Product Price..." 
    required 
/>

<input 
    className="w-full border border-blue-400 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
    type="text" 
    name="quantity" 
    placeholder="Product Quantity..." 
    required 
/>

<input 
    className="w-full bg-blue-500 text-white font-semibold p-3 rounded-lg hover:bg-blue-600 cursor-pointer" 
    type="submit" 
    value="Add Product" 
/>
</form>
<div>
    <p className='text-red-600 font-semibold text-center text-xl p-1 border-1 border-red-400 mt-4'><small>{error}</small></p>
</div>
</div>
</div>
);
};

export default ProductForm;
