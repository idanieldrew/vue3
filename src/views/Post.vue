<template>
  <div>
    <h1>
      {{ p.title }}
      |
      {{ p.details }}
      |
      {{ p.description }}
    </h1>
    <p>
      {{
        p.user.email
      }}
    </p>
    <p>
      {{
        p.user.name
      }}
    </p>
  </div>
</template>

<script setup lang="ts">

import {post} from "@/store/post";
import {computed} from "vue";
import {useRoute} from "vue-router";

const route = useRoute()
const singlePost = post();

singlePost.fetchPost(route.params.post)

let p = computed(() => singlePost.post)
</script>

<style scoped>

</style>