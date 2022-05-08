<template>
  <div>
    <h1>
      {{ specialPost.value.title }}
      |
      {{ specialPost.value.details }}
      |
      {{ specialPost.value.description }}
    </h1>
    <p>
      {{
        specialPost.value.user.email
      }}
    </p>
    <p>
      {{
        specialPost.value.user.name
      }}
    </p>
  </div>
</template>

<script setup lang="ts">

import {post} from "@/store/post";
import {computed, ref} from "vue";
import {useRoute} from "vue-router";

const route = useRoute()
const singlePost = post();

let specialPost = ref();

singlePost.fetchPost(route.params.post)

specialPost.value = computed(() => singlePost.post)
</script>

<style scoped>

</style>