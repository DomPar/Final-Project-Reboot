import api from "./index_service";


const createShelter = async (body) => {
    try {
        const {data} = await api.post('/shelter/', body)
    return data;
    } catch (error) {
        console.log(error.response.data)
    }   
}

const getAllShelter = async () => {
    try {
        const {data} = await api.get('/shelter/')
    return data
    } catch (error) {
        console.log(error.response.data)
    }   
}

const getOneShelter = async (id) => {
    try {
        const {data} = await api.get(`/shelter/${id}`)
    return data;
    } catch (error) {
        console.log(error.response.data)
    }
}

const updateShelter = async (id, body) => {
    try {
        const {data} = await api.put(`/shelter/${id}`, body)
    return data;
    } catch (error) {
        console.log(error.response.data)
    }   
}

const deleteOneShelter = async (id) => {
    try {
        const {data} = await api.delete(`/shelter/${id}`)
    return data;
    } catch (error) {
        console.log(error.response.data)
    }
}



export { createShelter, getAllShelter, getOneShelter, updateShelter, deleteOneShelter }