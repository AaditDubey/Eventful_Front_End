import axiosWrapper from "../utils/axiosWrapper"

export default {
    create: async (order) => {
        let url = `orders`
        const res = await axiosWrapper.post(url, order)
        return res.data
    },
    get: async (id) => {
        let url = `orders/${id}`
        const res = await axiosWrapper.get(url)
        return res.data
    } 
}