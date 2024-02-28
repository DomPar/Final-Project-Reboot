import api from "./index_service";


const createPost = async (id) => {
    try {
        const {data} = await api.post('/post/')
    return data;
    } catch (error) {
        console.log(error.response.data)
    }   
}

const getAllPost = async () => {
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

const updatePost = async (id) => {
    try {
        const {data} = await api.put(`/post/${id}`)
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



export {createPost, getAllPost, getOnePost, updatePost, deleteOnePost}