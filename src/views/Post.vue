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

<script lang="ts">
import {post} from "@/store/post";
import {computed, defineComponent} from "vue";
import {useRoute} from "vue-router";

export default defineComponent({
  name: "singlePost",
  setup() {
    const route = useRoute()
    const singlePost = post();

     singlePost.fetchPost(route.params.post)

    let p = computed(() => singlePost.post)
    return {p}
  }
})
</script>

<style scoped>

</style>