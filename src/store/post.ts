import {defineStore} from "pinia";
import axios, {AxiosResponse} from "axios";

const url = process.env.VUE_APP_URL

interface posts {
    title: string,
    slug: string,
    details: string,
    description: string
}

export const post = defineStore({
    id: 'post',
    state: () => {
        return {
            posts: []
        }
    },

    actions:{
        async fetchPosts(){
            let res = await  axios.get<any>(`${url}/post/all`)

            this.posts = res.data
        }
    }
})