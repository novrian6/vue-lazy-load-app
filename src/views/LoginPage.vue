<template>
  <div>
    <h2>Login</h2>
    <button @click="login('admin')">Login as Admin</button>
    <button @click="login('user')">Login as User</button>
  </div>
</template>
<script setup>
  import { loginAs } from '../auth'
  import { useRouter } from 'vue-router'
  const router = useRouter()
  function login(role) {
    loginAs(role)
    router.push('/profile')
  }
</script>