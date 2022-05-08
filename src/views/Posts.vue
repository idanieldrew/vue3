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
        <th class="border-red-500 border-2 text-black py-5">Description</th>
        <th class="border-red-500 border-2 text-black py-5">Update</th>
        <th class="border-red-500 border-2 text-black py-5">Delete</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="post in allPosts.value" :key="post.id" class="bg-gray-700">
        <PostComponent :title="post.title" :slug="post.slug" :details="post.details"
                       :description="post.description"></PostComponent>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">

import PostComponent from "@/components/Post.vue";
import {computed, reactive, ref} from "vue";
import {post} from "@/store/post";

const posts = post();

let allPosts = ref()

posts.fetchPosts();

allPosts.value = computed(() => posts.posts)
</script>

<style scoped>

</style>