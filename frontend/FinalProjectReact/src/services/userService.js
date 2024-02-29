import api from "./config";



const getAllUsers = async () => {
    try {
        const {data} = await api.get('/user/')
    return data
    } catch (error) {
        console.log(error.response.data)
    }   
}

const getOneUser = async (id) => {
    try {
        const {data} = await api.get(`/user/${id}`)
    return data;
    } catch (error) {
        console.log(error.response.data)
    }
}

const updateUser = async (id, body) => {
    try {
        const {data} = await api.put(`/user/${id}`, body)
    return data;
    } catch (error) {
        console.log(error.response.data)
    }   
}

const updatePassword = async (id, body) => {
    try {
        const {data} = await api.patch(`/user/${id}`, body)
    return data;
    } catch (error) {
        console.log(error.response.data)
    }   
}

const updateEmail = async (id, body) => {
    try {
        const {data} = await api.patch(`/user/${id}`, body)
    return data;
    } catch (error) {
        console.log(error.response.data)
    }   
}

const updateUserName = async (id, body) => {
    try {
        const {data} = await api.patch(`/user/username/${id}`, body)
    return data;
    } catch (error) {
        console.log(error.response.data)
    }   
}

const addUserToFavorites = async (userId, petId) => {
    try {
        const {data} = await api.put(`/user/add/${userId}`, {userId, petId})
    return data;
    } catch (error) {
        console.log(error.response.data)
    }   
}

const deleteOwnProfile = async (id) => {
    try {
        const {data} = await api.delete(`/user/${id}`)
    return data;
    } catch (error) {
        console.log(error.response.data)
    }   
}

const restFromFavorites = async (userId, petId) => {
    try {
        const {data} = await api.put(`/user/add/${userId}`, {userId, petId})
    return data;
    } catch (error) {
        console.log(error.response.data)
    }   
}




export {updateUserName, restFromFavorites, deleteOwnProfile, addUserToFavorites, getAllUsers, getOneUser, updateUser, updatePassword, updateEmail}