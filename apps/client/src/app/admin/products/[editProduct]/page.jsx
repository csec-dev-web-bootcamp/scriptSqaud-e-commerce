"use client"

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { productData } from '@app/client/data/product';
import { useRouter } from 'next/navigation';
import React, { useContext} from 'react';
import DataContext from '@app/client/components/admincomponent/globalcontext/DataContext';
import EditcardModified from '@app/client/components/admincomponent/editcardmodified/editcardmod';


export default function EditProduct() {
    const { editProduct } = useParams();
    
    const [formData, setFormData] = useState({
        name: 'banakjak',
        description: '',
        prize: '',
        quantity: '',
        image: '',
        preview: ''
    });
    useEffect(() => {
        console.log(typeof(editProduct), "log")
        if (editProduct) {
            const foundproduct = productData.find((o) => o.id.toString() === editProduct);
            console.log(typeof(editProduct), foundproduct, "log")
            setFormData({
                name: foundproduct.name,
                description: foundproduct.description,
                prize: foundproduct.price,
                quantity: foundproduct.quantity,
                image: foundproduct.image,
                preview: ''
            });
        }
    }, [editProduct]);
    console.log("huhuh");

    const router = useRouter();
    const { productdata, updateproductData } = useContext(DataContext);

    const handleSubmit = (event) => {
        event.preventDefault();

       
        const newProductData = {
            id: newId,
            name: formData.name,
            price: formData.prize,
            description: formData.description,
            quantity: formData.quantity,
        };

        const updatedProductData = [...productdata, newProductData];
        updateproductData(updatedProductData);
        router.back();
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFormData({
                ...formData,
                image: file,
                preview: URL.createObjectURL(file)

            });
        }
    };

    return (
        <div className='home'>
            <h2 className='name_header'>Edit Products</h2>
            <div className='from_product'>
                <form  className='form' onSubmit={handleSubmit} action="">
                    <div>
                        <label htmlFor="name">Name of Product :</label>
                        <input type="text" name='name' value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                    </div>
                    <div>
                        <label htmlFor="prize">Product prize:</label>
                        <input type="text" name='prize' value={formData.prize} onChange={(e) => setFormData({ ...formData, prize: e.target.value })} />
                    </div>
                    <div>
                        <label htmlFor="description">Description :</label>
                        <input type="text" name='description' value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} />
                    </div>
                    <div>
                        <label htmlFor="quantity">Product Quantity :</label>
                        <input type="text"  name='quantity' value={formData.quantity} onChange={(e) => setFormData({ ...formData, quantity: e.target.value })} />
                    </div>
                    <div>
                        <label htmlFor="image">Product Image :</label>
                        <input type="file"  name='image' onChange={handleImageChange} />
                    </div>
                    <button type='submit'>Edit Product</button>
                </form>
                <EditcardModified 
                name={formData.name} 
                price={formData.prize} 
                image={formData.preview}
                description={formData.description}
                 />
            </div>
        </div>
    );
}
