<template>
  <form>
    <div>
      <input
        type="text"
        autocomplete="true"
        v-model="form.name"
        placeholder="name"
      />
    </div>
    <div>
      <input type="email" v-model="form.email" placeholder="email" />
    </div>
    <div>
      <input type="number" v-model="form.phone" placeholder="phone" />
    </div>
    <div>
      <input type="password" v-model="form.password" placeholder="password" />
    </div>
    <div>
      <button @click.prevent="register" type="submit">submit</button>
    </div>
  </form>
</template>

<script lang="ts" setup>
import { reactive, defineEmits } from "vue";

const emit = defineEmits(["doRegister"]);

let form = reactive({
  name: "",
  email: "",
  phone: "",
  password: "",
});

function register(): void {
  emit("doRegister", form);
}
</script>