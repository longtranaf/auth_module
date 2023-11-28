<template>
  <div>
    <input type="text" v-model="username">
    <input type="password" name="" id="" v-model="password">
    <input type="button" value="Login" @click="submit">
    <p>{{message}}</p>
  </div>
  <NuxtPage />
</template>

<script setup>
import {useAuthStore} from './store/index'
const username = ref('')
const password = ref('')
const message = ref('')
const emit = defineEmits(['login'])
function submit() {
  if (useAuthStore().getAuth({
    username: username.value,
    password: password.value
  })) {
    message.value = 'Login success'
    emit('login')
  } else {
    message.value = 'Login failed'
  }
}
</script>
