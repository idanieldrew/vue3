<template>
  <form>
    <div>
      <input type="text" v-model="form.name" placeholder="name" />
    </div>
    <div>
      <input type="email" v-model="form.email" placeholder="email" />
    </div>
    <div>
      <input type="password" v-model="form.password" placeholder="password" />
    </div>
    <div>
      <button @click.prevent="register" type="submit">submit</button>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue-demi";

interface Form {
  name: string;
  email: string;
  password: string;
}

export default defineComponent({
  data() {
    return {
      form: {
        name: "",
        email: "",
        password: "",
      } as Form,
    };
  },
  
  methods: {
    register(): void {
      this.$emit("doRegister", this.form);
    },
  },
});
</script>