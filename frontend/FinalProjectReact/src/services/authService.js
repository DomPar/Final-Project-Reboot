import api from './config'

export const login = async (body) => {
    try {
        const result = await api.post('/auth/login', body)
        console.log(result.data)
        return result
    } catch (error) {
        console.log(error.response.data)
    }
}