import {defineStore} from "pinia";
import axios, {AxiosResponse} from "axios";
import {Post} from "@/types/post";

const url = process.env.VUE_APP_URL

export const post = defineStore({
    id: 'post',
    state: () => {
        return {
            post: {} as Post,
            posts: [] as Post[]
        }
    },

    actions: {
        async fetchPosts() {
            let res = await axios.get<Post[]>(`${url}/post/all`)
            this.posts = res.data
        },

        async fetchPost(slug: any) {
            let res = await axios.get<AxiosResponse>(`${url}/post/${slug}`)
            this.post = res.data.data
        }
    }
})