<template>
  <div>
    <table
      class="
        border-separate border border-slate-500
        container
        mx-auto
        table-auto
      "
    >
      <thead>
        <tr class="bg-black">
          <th class="border border-slate-600 text-white py-5">Name</th>
          <th class="border border-slate-600 text-white py-5">Email</th>
          <th class="border border-slate-600 text-white py-5">Update</th>
          <th class="border border-slate-600 text-white py-5">Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in allUsers" :key="user.id" class="bg-gray-700">
          <td class="border border-slate-700 text-white py-3">
            {{ user.name }}
          </td>
          <td class="border border-slate-700 text-white">{{ user.email }}</td>
          <td class="border border-slate-700 text-white">Update</td>
          <td class="border border-slate-700 text-white">Delete</td>
        </tr>
      </tbody>
    </table>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <!-- <router-view/> -->
</template>

<script lang="ts">
import { computed } from "vue-demi";
import { auth } from "./store";
export default {
  setup() {
    const store = auth();

    store.fetchPosts();

    const allUsers = computed(() => store.allUsers);
    return { allUsers };
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>