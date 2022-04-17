<template>
  <div v-for="post in allPosts" :key="post.slug">
    <h3>{{ post.title }}</h3>
    lorems
  </div>
</template>

<script lang="ts">
import {computed, defineComponent} from "vue-demi";
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