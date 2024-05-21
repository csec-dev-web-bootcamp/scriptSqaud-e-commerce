"use client"

import { useRouter } from 'next/navigation';
import React, { useContext, useState } from 'react';
import DataContext from '@app/client/components/admincomponent/globalcontext/DataContext';
import EditcardModifiedUser from '@app/client/components/admincomponent/EditcardModifiedUser/EditcardModifiedUser';

export default function AddProduct() {
    const [formData, setFormData] = useState({
        fullname: '',
        email: '',
        phone: '',
        image: '',
        preview: '',
        username:'',
        createdAt:''
    });
   

    const router = useRouter();
    const { userdata, updateUserData } = useContext(DataContext);

    const handleSubmit = (event) => {
        event.preventDefault();


        //calculate current date
        function getCurrentDate() {
            const date = new Date();
          
            const year = date.getFullYear();
            const month = String(date.getMonth() + 1).padStart(2, '0');
            const day = String(date.getDate()).padStart(2, '0');
          
            return `${year}-${month}-${day}`;
        }

        // Calculate the new ID
        const lastId = userdata.length > 0 ? userdata[userdata.length - 1].id : 0;
        const newId = lastId + 1;

        const newUserData = {
            id: newId,
            fullname: formData.fullname,
            phone: formData.phone,
            email: formData.email,
            username: formData.username,
            createdAt:getCurrentDate()
        };

        const updatedUserData = [...userdata, newUserData];
        updateUserData(updatedUserData);
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
            <h2 className='name_header'>Add Users</h2>
            <div className='from_product'>
                <form onSubmit={handleSubmit} action="">
  
                    <div>
                        <label htmlFor="name">Full Name :</label>
                        <input type="text" name='fullname' value={formData.name} onChange={(e) => setFormData({ ...formData, fullname: e.target.value })} />
                    </div>
                    <div>
                        <label htmlFor="prize">Email:</label>
                        <input type="text" name='email' value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                    </div>
                    <div>
                        <label htmlFor="description">Phone :</label>
                        <input type="text" name='phone' value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
                    </div>
                    <div>
                        <label htmlFor="quantity">User Name :</label>
                        <input type="text" name='username' value={formData.username} onChange={(e) => setFormData({ ...formData, username: e.target.value })} />
                    </div>
                    <div>
                        <label htmlFor="image">Profile Image :</label>
                        <input type="file" name='image' onChange={handleImageChange} />
                    </div>
                    <button type='submit'>Add User</button>
                </form>
                <EditcardModifiedUser 
                fullname={formData.fullname} 
                phone={formData.phone} 
                image={formData.preview}
                email={formData.email}
                username={formData.username}
                 />
            </div>
        </div>
    );
}
