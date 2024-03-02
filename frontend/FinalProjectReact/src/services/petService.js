import api from "./config";


const createPet = async (body) => {
    try {
        const {data} = await api.post('/pet/', body)
    return data;
    } catch (error) {
        console.log(error.response.data)
    }   
}

const getAllPets = async () => {
    try {
        const {data} = await api.get('/pet/')
    return data
    } catch (error) {
        console.log(error.response.data)
    }   
}

const getAllPetsByShelter = async (shelterId) =>{
    try {
        const {data} = await api.get(`/pet/shelter/${shelterId}`)
    return data
    } catch (error) {
        console.log(error.response.data)
    }  
}

const getOnePet = async (id) => {
    try {
        const {data} = await api.get(`/pet/${id}`)
    return data;
    } catch (error) {
        console.log(error.response.data)
    }
}

const updatePet = async (id, body) => {
    try {
        const {data} = await api.put(`/pet/${id}`, body)
    return data;
    } catch (error) {
        console.log(error.response.data)
    }   
}

const deleteOnePet = async (id) => {
    try {
        const {data} = await api.delete(`/pet/${id}`)
    return data;
    } catch (error) {
        console.log(error.response.data)
    }
}



export { createPet, getAllPets, getOnePet, updatePet, deleteOnePet, getAllPetsByShelter }