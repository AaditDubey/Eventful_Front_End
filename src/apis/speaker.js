import axiosWrapper from "../utils/axiosWrapper"

export default {
    getAll: async () => {
        let query = `speakers`
        const res = await axiosWrapper.get(query)
        return res.data
    },
    getBySlug: async (slug) => {
        let query = `speakers/${slug}`
        const res = await axiosWrapper.get(query)
        return res.data
    } 
}