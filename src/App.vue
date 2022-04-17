<template>
  <div>
    <!-- <p class="bg-white">name: {{ user.name ?? "null" }}</p> -->

    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/register">Register</router-link>
  </div>
  <router-view />
</template>

<script lang="ts">
import { computed, defineComponent } from "vue-demi";
import { auth } from "./store/auth";

export default defineComponent({
  setup() {
    const authentication = auth();

    let user = computed(() => authentication.fetchUser);

    return { setUp: authentication.setData, user };
  },

  watch: {
    $route() {
      this.setUp;
    },
  },
});
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