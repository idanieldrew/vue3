<template>
  <div>
    <SignUp @doRegister="register"></SignUp>
  </div>
</template>

<script lang="ts">
import { auth } from "@/store/auth";
import { defineComponent } from "vue-demi";
import SignUp from "../components/form-register.vue";

export default defineComponent({
  components: {
    SignUp,
  },

  methods: {
    register(value: any) {
      console.log(value);

      let auths = auth();

      try {
        auths.register(value);
        this.$router.push("/");
      } catch (error) {
        this.$router.push("/register");
      }
    },
  },
});
</script>