import { defineStore } from "pinia";
import { Post } from '../types/post';
import axios from "axios";
export type State = {
      post: Post[]
}
export const useStore = defineStore({
      id: 'post',
      state: (): State => ({
            post: []
      }),

      getters: {
            allPosts: state => state.post
      },

      actions: {
            async fetchPosts() {
                  let res = await axios.get("https://jsonplaceholder.typicode.com/posts")
                  this.post = res.data
            }
      }
})