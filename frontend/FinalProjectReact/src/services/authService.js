import api from './config.js'

export const login = async (body) => {
    try {
        const {data} = await api.post('/auth/login', body)
        return data
    } catch (error) {
        console.log(error.response.data)
    }
}

export const signup = async (body) => {
    try {
        console.log(body)
        const {data} = await api.post('/auth/signup', body)
        return data
    } catch (error) {
        console.log(error.response.data)
    }
}