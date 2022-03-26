import axios, { AxiosResponse } from 'axios';
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
            fetchUser: (state) => state.user,
            setData(state) {
                  let user: User = JSON.parse(localStorage.getItem('user') || '{}')

                  let token = JSON.parse(localStorage.getItem('token') || '{}')
                  if (token) {
                        state.isRegister = true,
                        state.user = user
                        state.token = token
                  } else {
                        state.isRegister = false,
                        state.token = ''
                  }
            },

            reg(state): void {
                  if (state.token) {
                        localStorage.setItem('token', JSON.stringify(state.token))
                        localStorage.setItem('user', JSON.stringify(state.user))
                        state.isRegister = true
                        this.setData
                  } else {
                        state.isRegister = false
                        state.token = ''
                  }
            }
      },

      actions: {
            register(value: string) {
                  axios.post<AxiosResponse>(`${url}/user/register`, value)
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