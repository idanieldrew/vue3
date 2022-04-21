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
      <tr v-for="post in allPosts" :key="post.id" class="bg-gray-700">
        <PostComponent :title="post.title" :slug="post.slug" :details="post.details"
                       :description="post.description"></PostComponent>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import PostComponent from "@/components/Post.vue";
import {computed, defineComponent} from "vue";
import {post} from "@/store/post";

export default defineComponent({
  name: "Post",
  components: {
    PostComponent
  },
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