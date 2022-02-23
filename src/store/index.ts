import { defineStore } from "pinia";
import { Post } from '../types/post';
export type State = {
      post: Post[]
}
export const useStore = defineStore({
      id: 'post',
      state: (): any => ({
            post: []
      }),
      /* state: () => ({
             post: Array<object>
       }),*/

      getters: {
            allPosts: state => state.post
      },

      actions: {
            fetchPosts() {
                  alert(12)
                  fetch('https://jsonplaceholder.typicode.com/todos/1')
                        .then(response => response.json())
                        .then(json => this.post = json)
            }
      }
})