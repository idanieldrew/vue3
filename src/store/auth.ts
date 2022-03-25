import axios from 'axios';
import { defineStore } from 'pinia';
const url = process.env.VUE_APP_URL;
import { User } from '@/types/auth';


export const auth = defineStore({
      id: "auth",
      state: () => {
            return {
                  token: '' as string,
                  isRegister: false,
                  user: null as User | null
            }
      },

      getters: {
            setData(state): void {
                  let token = localStorage.getItem('token')
                  token = JSON.parse(state.token)
                  if (token) {
                        state.isRegister = true,
                              state.token = token
                  } else {
                        state.isRegister = false,
                              state.token = ''
                  }
            },

            reg(state) {
                  if (state.token) {
                        localStorage.setItem('token', JSON.stringify(state.token))
                        state.isRegister = true
                  } else {
                        state.isRegister = false
                        state.token = ''
                  }
            }
      },

      actions: {
            register(value: string) {
                  axios.post<any>(`${url}/user/register`, value)
                        .then(response => {
                              this.user = response.data.data.user
                              this.token = response.data.data.token
                              this.reg
                        }).catch(err => {
                              console.log("error");
                        })
            }
      }
})