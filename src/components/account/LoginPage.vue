<template>
  <div class="flex items-center justify-center px-2">
    <div>
      <h1 class="font-firs font-bold text-4xl mb-4">Sign In</h1>
      <form
        @submit.prevent="login"
        class="flex flex-col px-5 pt-5 pb-6 w-full lg:w-[28rem] bg-[#d9d9d948] shadow-sm rounded-xl"
      >
        <div v-for="(field, key, i) in form" :key="i" class="mb-5">
          <label :for="key" class="token-setup-input-label">{{
            field.label
          }}</label
          ><input
            v-model="field.value"
            :type="getInputType(key)"
            class="token-setup-input"
          />
        </div>

        <button
          type="submit"
          class="w-full bg-crypto-blue hover:bg-[hsl(216,84%,38%)] text-white font-medium rounded-md py-3 mt-8 transition"
        >
          Log In
        </button>
      </form>

      <div class="flex justify-center gap-x-1 mt-3">
        <div
          @click="signInWithGoogle"
          class="text-sm lg:text-base font-medium py-3 px-4 lg:px-6 hover:bg-[#0000000c] rounded-md cursor-pointer"
        >
          Sign in with Google
        </div>

        <div
          @click="signInWithGithub"
          class="text-sm lg:text-base font-medium py-3 px-4 lg:px-6 hover:bg-[#0000000c] rounded-md cursor-pointer"
        >
          Sign in with GitHub
        </div>
      </div>

      <p class="text-center mt-6">
        No account yet?
        <span class="text-crypto-blue cursor-pointer hover:underline"
          ><router-link to="/account/register">Register here</router-link></span
        >
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue"
import {
  signIn,
  signInWithGoogle,
  signInWithGithub,
} from "../../services/authService"

const form = reactive({
  email: {
    label: "Email",
    value: "",
  },
  password: {
    label: "Password",
    value: "",
  },
})

const getInputType = (type: string) => {
  switch (type) {
    case "password":
      return "password"
    case "email":
      return "email"
    default:
      return "text"
  }
}

const login = () => {
  const { email, password } = form
  signIn(email.value, password.value)
}
</script>
