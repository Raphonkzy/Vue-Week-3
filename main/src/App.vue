<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useAuthStore } from "@/stores/auth"

const router = useRouter()

const authStore = useAuthStore()

</script>

<template>
  <div class="container">
    <div class="navbar">
      <router-link class="router" to="/">Home</router-link>
      <router-link class="router" to="/about">About</router-link>
      <router-link class="router" to="/restricted">Restricted page</router-link>
    </div>

    <span v-if="authStore.username == ''">
      <router-link to="/login">
        <button class="login">Login</button>
      </router-link>
    </span>
    <span v-else class="name">
      {{ authStore.username }}
    </span>
  </div>
  <RouterView />
</template>

<style></style>
