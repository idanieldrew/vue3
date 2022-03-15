<template>
  <div class="home">
    <table
      class="
        border-separate border border-slate-500
        container
        mx-auto
        table-auto
      "
    >
      <thead>
        <tr class="bg-gray-300">
          <th class="border-2 border-red-500 text-black py-5">Name</th>
          <th class="border-red-500 border-2 text-black py-5">Email</th>
          <th class="border-red-500 border-2 text-black py-5">Update</th>
          <th class="border-red-500 border-2 text-black py-5">Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in allUsers" :key="user.id" class="bg-gray-700">
          <td class="border border-slate-700 text-white py-3">
            {{ user.name }}
          </td>
          <td class="border border-slate-700 text-white">{{ user.email }}</td>
          <td class="border border-slate-700 text-white">
            <router-link
              class="hover:text-green-400"
              :to="'/update/' + user.name"
              >Update</router-link
            >
          </td>
          <td class="border border-slate-700 text-white">
            <router-link class="hover:text-red-400" to="/">Delete</router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { computed } from "vue-demi";
import { auth } from "./../store";
export default {
  setup() {
    const store = auth();

    store.fetchPosts();

    const allUsers = computed(() => store.allUsers);
    return { allUsers };
  },
};
</script>
