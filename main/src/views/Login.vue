<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useAuthStore } from "@/stores/auth"
import { ref } from 'vue';

const authStore = useAuthStore()
const router = useRouter()

const username = ref("")
const password = ref("")

const isLogin = ref(null)

const login = async() => {
    
    const response = await fetch("http://localhost:3000/users/", {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: username.value,
            password: password.value
        })
    })

    const data = await response.json()

    if (data.message == "login success"){
        authStore.username = username.value
        authStore.password = password.value
    
        isLogin.value = true
    
        router.push("/")
    }
    else {
        isLogin.value = false
    }
}

</script>

<template>
    <h1>Please Login</h1>
        <div>
            <input type="text" placeholder="Username" v-model="username">
        </div>
        <div>
            <input type="password" placeholder="Password" v-model="password">
        </div>
        <button type="submit" class="login" @click="login">Login</button>
</template>