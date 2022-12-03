import API from "./API"
// manipulating products
export const getProducts = (query) => API.get(`/api/product/getproducts/${query}`)
export const addProduct = (data) => API.post(`/api/product/add`, data)
export const deleteProduct = (id) => API.delete(`/api/product/delete/${id}`)
export const updateProduct = (id, data) => API.put(`/api/product/update/${id}`, data)

// upload and delete images
export const uploadImage = (data) => API.post('/api/image/upload/', data)
export const deleteImage = (imageName) => API.delete(`/api/image/delete/${imageName}`)