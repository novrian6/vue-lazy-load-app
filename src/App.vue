<template>
  <div>
    <nav>
      <router-link to="/profile">Profile</router-link> |
      <router-link to="/admin">Admin</router-link>
       <button @click="logout" v-if="isLoggedIn">Logout</button>
    </nav>
    <router-view />
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router'
import { ref, computed } from 'vue'

const router = useRouter()
const isLoggedIn = computed(() => !!localStorage.getItem('auth_token'))

function logout() {
  localStorage.removeItem('auth_token')
  localStorage.removeItem('user_role')
  router.push('/login')
}
</script>