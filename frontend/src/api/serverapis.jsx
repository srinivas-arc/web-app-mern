export const fetchProducts = async () => {
    const res = await fetch("http://localhost:5000/products/api/")
    const data = await res.json()
    return data
}
export const deleteProduct = async (id) => {
    const res = await fetch(`http://localhost:5000/products/api/${id}`, {
        method: "DELETE"
    });
    const data = await res.json()
    return data
}
export const fetchProductById = async (id) => {
    const res = await fetch(`http://localhost:5000/products/api/${id}`);
    const data = await res.json()
    return data
}
export const updateProduct = async (formData, id) => {
    const res = await fetch(`http://localhost:5000/products/api/${id}`, {
        method: "PUT",
        headers: {"Content-Type":"application/json"},
        body:JSON.stringify(formData)
    })
    const data = await res.json()
    return data
}
export const saveProduct = async (formData) => {
    const res = await fetch(`http://localhost:5000/products/api/`, {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body:JSON.stringify(formData)
    })
    const data = await res.json()
    return data
}