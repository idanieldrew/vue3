import { defineStore } from "pinia";
import axios from "axios";

const url = process.env.VUE_APP_URL

export const user = defineStore({
      id: 'user',
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

                  this.users = res.data
            }
      }
})