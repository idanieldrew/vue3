<template>
  <td class="border border-slate-700 text-white py-3">
    {{ title }}
  </td>
  <td class="border border-slate-700 text-white">{{ details }}</td>
  <td class="border border-slate-700 text-white">{{ shortDescription }} <router-link class="text-blue-500" :to="slug">...</router-link></td>
  <td class="border border-slate-700 text-white">
    <router-link
        class="hover:text-green-400"
        :to="'/update/' + slug"
    >Update
    </router-link
    >
  </td>
  <td class="border border-slate-700 text-white">
    <router-link class="hover:text-red-400" to="/">Delete</router-link>
  </td>
</template>

<script lang="ts">
import {computed, defineComponent} from "vue";

export default defineComponent({
  name: "Post",

  props: {
    title: {
      required: true,
      type: String
    },
    details: {
      required: true,
      type: String
    },
    description: {
      required: true,
      type: String
    },
    slug: {
      required: true,
      type: String
    },
  },

  computed:{
    shortDescription(){
      return this.description.substr(0,25)
    }
  },
})
</script>

<style scoped>

</style>