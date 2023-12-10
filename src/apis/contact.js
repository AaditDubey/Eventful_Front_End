import axiosWrapper from "../utils/axiosWrapper"

export default {
    create: async (contact) => {
        let url = `contact`
        const res = await axiosWrapper.post(url, contact)
        return res.data
    },
    subscribe: async (contact) => {
        let url = `contact/subscribe`
        const res = await axiosWrapper.post(url, contact)
        return res.data
    },
}