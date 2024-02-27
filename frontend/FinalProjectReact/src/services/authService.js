import api from './config'

export const login = async (body) => {
    try {
        const {data} = await api.post('/auth/login', body)
        return data
    } catch (error) {
        console.log(error.response.data)
    }
}