import { defineStore } from "pinia";

export const count = defineStore({
  id: "counter",
  state: () => ({
    name: "John Doe",
    email: "fake@email.com",
    username: "jd123",
  }),
});
