"use server";

import fetcher from "./fetcher";

export async function getManyProducts(query) {
  const res = await fetcher(`/products?${query ?? ""}`, {
    method: "GET",
    next: { tags: ["ProductS"], revalidate: 3600 },
  });
  if (!res.success) {
    return res.error;
  }
  return res.data;
}

export async function getOneProduct(id) {
  const res = await fetcher(`/products/${id}`, {
    method: "GET",
    next: { tags: [`ProductS:${id}`], revalidate: 3600 },
  });
  if (!res.success) {
    return res.error;
  }
  return res.data;
}


