"use client"

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { productData } from '@app/client/data/product';
import { useRouter } from 'next/navigation';
import React, { useContext} from 'react';
import DataContext from '@app/client/components/admincomponent/globalcontext/DataContext';
import EditCatagoryModified from '@app/client/components/admincomponent/editcatmod/editcatagorymodifies';


export default function EditProduct() {
    const { id } = useParams();
    
    const [formData, setFormData] = useState({});
    useEffect(() => {
        if (id) {
            const foundproduct = productData.find((o) => o.id.toString() === id);
            setFormData({
                name: foundproduct.name,
                description: foundproduct.description,
                image: foundproduct.image,
                preview: ''
            });
        }
    }, [id]);

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
            <h2 className='name_header'>Edit Catagory</h2>
            <div className='from_product'>
                <form  className='form' onSubmit={handleSubmit} action="">
                    <div>
                        <label htmlFor="name">Name of Product :</label>
                        <input type="text" name='name' value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                    </div>
                   
                    <div>
                        <label htmlFor="description">Description :</label>
                        <input type="text" name='description' value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} />
                    </div>
                 
                    <div>
                        <label htmlFor="image">Product Image :</label>
                        <input type="file"  name='image' onChange={handleImageChange} />
                    </div>
                    <button type='submit'>Edit Catagory</button>
                </form>
                <EditCatagoryModified 
                name={formData.name}  
                image={formData.preview}
                description={formData.description}
                 />
            </div>
        </div>
    );
}
