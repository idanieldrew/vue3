import { defineStore } from "pinia";
import { Post } from '../types/post';
import axios from "axios";

const url = process.env.VUE_APP_URL

// export type State = {
//       isAuth: false,
//       token: ''
// }

export const auth = defineStore({
      id: 'auth',
      state: () => {
            return {
                  users: []
            }
      },

      getters: {
            allUsers: (state) => state.users
      },

      actions: {
            async fetchPosts() {
                  let res = await axios.get(`${url}/user/all`)

                  this.users = res.data.data
            }
      }
})