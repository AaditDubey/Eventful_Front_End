import axiosWrapper from "../utils/axiosWrapper"

export default {
    getAll: async (query) => {
        let url = `blogposts?published=true`
        if(query){
            if(query.pageIndex)
                url += `&pageIndex=${query.pageIndex}`
            if(query.pageSize)
                url += `&pageSize=${query.pageSize}`
            if(query.speakerId)
                url += `&speakerId=${query.speakerId}`
            if(query.searchText)
                url += `&searchText=${query.searchText}`
            if(query.tag)
                url += `&tag=${query.tag}`
        }
        const res = await axiosWrapper.get(url)
        return res.data
    },
    getBySlug: async (slug) => {
        let query = `blogposts/${slug}`
        const res = await axiosWrapper.get(query)
        return res.data
    } 
}