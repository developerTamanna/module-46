import React from 'react';

const ProductTable = ({ products }) => {
    return (
<div className="p-8">
<h3 className="text-2xl font-semibold mb-4 p-2">Total Products: <span className='text-blue-600 font-semibold'>{products.length}</span></h3>

<div className="overflow-x-auto shadow-lg rounded-lg">
<table className="min-w-full divide-y divide-gray-200">
<thead className="bg-blue-500 text-white">
<tr>
<th className="px-6 py-3 text-left text-sm font-medium uppercase">No</th>
<th className="px-6 py-3 text-left text-sm font-medium uppercase">Product</th>
<th className="px-6 py-3 text-left text-sm font-medium uppercase">Price</th>
<th className="px-6 py-3 text-left text-sm font-medium uppercase">Quantity</th>
<th className="px-6 py-3 text-left text-sm font-medium uppercase">Action</th>
</tr>
</thead>
<tbody className="bg-white divide-y divide-gray-300">
{
products.map((product, index) => (
<tr key={index} className="hover:bg-gray-100">
    <td className="px-6 py-4">{index + 1}</td>
    <td className="px-6 py-4">{product.name}</td>
    <td className="px-6 py-4">${product.price}</td>
    <td className="px-6 py-4">{product.quantity}</td>
    <td className="px-6 py-4">
        <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
            Delete
        </button>
    </td>
</tr>
))
}
</tbody>
</table>
</div>
</div>
    );
};

export default ProductTable;
