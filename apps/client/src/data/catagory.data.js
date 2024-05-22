
'use server';

import fetcher from './fetcher';
import revalidate from './revalidate';

export async function createCategory(data,) {
    const catagory = fetcher.post('/category', data);
    revalidate({ tags: ['CATAGORIES'] });
    return catagory;
}

export async function getManyCategories() {
    const res = await fetcher.get('/category');
    return res.data;
}

export async function getOneCategory(id,) {
    const res = await fetcher.get(`/category/${id}`);
    return res.data;
}

export async function updateCategory(id, data) {
    const res = await fetcher.put(`/category/${id}`, data);
    return res.data;
}

export async function deleteCatagory(id) {
    const res = await fetcher.get(`/category/${id}`);
    return res.data;
}

