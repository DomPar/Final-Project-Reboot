import api from "./config";


const createPost = async (body) => {
    try {
        const {data} = await api.post('/post/', body)
    return data;
    } catch (error) {
        console.log(error.response.data)
    }   
}

const getAllPosts = async () => {
    try {
        const {data} = await api.get('/post/')
    return data
    } catch (error) {
        console.log(error.response.data)
    }   
}

const getOnePost = async (id) => {
    try {
        const {data} = await api.get(`/post/${id}`)
    return data;
    } catch (error) {
        console.log(error.response.data)
    }
}

const updatePost = async (id, body) => {
    try {
        const {data} = await api.put(`/post/${id}`, body)
    return data;
    } catch (error) {
        console.log(error.response.data)
    }   
}

const deleteOnePost = async (id) => {
    try {
        const {data} = await api.delete(`/post/${id}`)
    return data;
    } catch (error) {
        console.log(error.response.data)
    }
}



export { createPost, getAllPosts, getOnePost, updatePost, deleteOnePost }