<script setup lang="ts">
import { useAuthStore } from "@/stores/auth"

const authStore = useAuthStore()
</script>

<template>
<div class="restricted" v-if="authStore.username == ''">
   <h1>Login first to see the content</h1>
</div>
<div v-else class="name">
   <h1>Anda sudah berhasil login</h1>
</div>
</template>
