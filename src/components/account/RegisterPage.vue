<template>
  <div class="flex items-center justify-center px-2">
    <div>
      <h1 class="font-firs font-bold text-4xl mb-4">Sign Up</h1>

      <form
        @submit.prevent="createAccount"
        class="flex flex-col px-4 lg:px-5 pt-5 pb-6 w-full lg:w-[28rem] bg-[#d9d9d948] shadow-sm rounded-xl"
      >
        <div v-for="(field, key, i) in form" :key="i" class="mb-5">
          <label :for="key" class="token-setup-input-label">{{
            field.label
          }}</label
          ><input
            v-model="field.value"
            :type="getInputType(key)"
            class="token-setup-input"
            @keyup="
              () => {
                formErrors[key] = validateField(field, key)
              }
            "
          />
          <span :class="{ hidden: false }">{{ formErrors[key] }}</span>
        </div>

        <button
          type="submit"
          class="w-full bg-crypto-blue hover:bg-[hsl(216,84%,38%)] text-white font-medium rounded-md py-3 mt-8 transition"
        >
          Create Account
        </button>
      </form>

      <div class="flex justify-center gap-x-1 mt-3">
        <div
          @click="signInWithGoogle"
          class="text-sm lg:text-base font-medium py-3 px-4 lg:px-6 hover:bg-[#0000000c] rounded-md cursor-pointer"
        >
          Sign up with Google
        </div>

        <div
          @click="signInWithGithub"
          class="text-sm lg:text-base font-medium py-3 px-4 lg:px-6 hover:bg-[#0000000c] rounded-md cursor-pointer"
        >
          Sign up with GitHub
        </div>
      </div>

      <p class="text-center mt-6">
        Already have an account?
        <span class="text-crypto-blue cursor-pointer hover:underline" @click=""
          ><router-link to="/account/login">Sign in</router-link></span
        >
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { validateField } from "../../services/formService"
import {
  signUp,
  signInWithGithub,
  signInWithGoogle,
} from "../../services/authService"

const form = ref({
  name: {
    label: "Name",
    value: "",
    required: true,
  },
  email: {
    label: "Email",
    value: "",
    required: true,
  },
  password: {
    label: "Password",
    value: "",
    required: true,
  },
})

const formErrors = ref<{ [key: string]: string | null }>({
  name: null,
  email: null,
  password: null,
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

const createAccount = () => {
  const { name, email, password } = form.value
  signUp(name.value, email.value, password.value)
}
</script>
