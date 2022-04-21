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
      <tr class="bg-gray-300">
        <th class="border-2 border-red-500 text-black py-5">Title</th>
        <th class="border-red-500 border-2 text-black py-5">Details</th>
        <th class="border-red-500 border-2 text-black py-5">Update</th>
        <th class="border-red-500 border-2 text-black py-5">Delete</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="post in allPosts" :key="post.id" class="bg-gray-700">
        <td class="border border-slate-700 text-white py-3">
          {{ post.title }}
        </td>
        <td class="border border-slate-700 text-white">{{ post.details }}</td>
        <td class="border border-slate-700 text-white">
          <router-link
              class="hover:text-green-400"
              :to="'/update/' + post.slug"
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
import {computed, defineComponent} from "vue";
import {post} from "@/store/post";

export default defineComponent({
  name: "Post",
  setup() {
    const posts = post();

    posts.fetchPosts();

    const allPosts = computed(() => posts.posts)

    return {allPosts}
  }
})
</script>

<style scoped>

</style>