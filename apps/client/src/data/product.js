'use server';

import fetcher from './fetcher';
import revalidate from './revalidate';

export async function createProduct(data,) {
    const product = fetcher.post('/products', data);
    revalidate({ tags: ['PRODUCTS'] });
    return product;
}

export async function getManyProducts() {
    const res = await fetcher.get('/products');
    return res.data;
}

export async function getOneProduct(id,) {
    const res = await fetcher.get(`/products/${id}`);
    return res.data;
}

export async function updateProduct(id, data) {
    const res = await fetcher.put(`/products/${id}`, data);
    return res.data;
}

export async function deleteProduct(id) {
    const res = await fetcher.get(`/products/${id}`);
    return res.data;
}
