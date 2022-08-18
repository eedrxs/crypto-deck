<template>
  <form
    class="self-start max-w-[34rem] bg-[#d9d9d948] rounded-lg pt-7 pb-5 px-5"
  >
    <div class="flex flex-col gap-y-1 mb-5">
      <label for="name" class="token-setup-input-label"
        >{{ fields.name.label }}:</label
      >
      <input
        v-model="tokenForm.name"
        type="text"
        class="token-setup-input"
        id="name"
      />
    </div>

    <div
      class="flex flex-col x-sm:flex-row x-sm:justify-between gap-y-5 x-sm:gap-x-6 mb-5"
    >
      <div>
        <label class="token-setup-input-label" for="symbol"
          >{{ fields.symbol.label }}:</label
        >
        <input
          v-model="tokenForm.symbol"
          type="text"
          class="token-setup-input"
          id="symbol"
        />
      </div>

      <div class="block w-[100%] x-sm:w-[50%]">
        <label class="token-setup-input-label" for="type"
          >{{ fields.type.label }}:</label
        >
        <select
          v-model="tokenForm.tokenType"
          class="token-setup-input border-none"
          id="type"
        >
          <option label="Select a type" disabled selected></option>
          <option
            v-for="(tokenType, i) in tokenTypes"
            :key="i"
            :value="tokenType"
          >
            {{ tokenType }}
          </option>
        </select>
      </div>
    </div>

    <div
      class="flex flex-col x-sm:flex-row x-sm:justify-between gap-y-5 x-sm:gap-x-6 mb-5"
    >
      <div>
        <label class="token-setup-input-label" for="symbol"
          >{{ fields.initialSupply.label }}:</label
        >
        <input
          v-model="tokenForm.initialSupply"
          type="number"
          min="0"
          class="token-setup-input"
          id="symbol"
        />
      </div>

      <div>
        <label class="token-setup-input-label" for="type"
          >{{ fields.decimals.label }} <i>(optional)</i>:</label
        >
        <input
          v-model="tokenForm.decimals"
          type="number"
          min="1"
          class="token-setup-input"
          id="type"
        />
      </div>
    </div>

    <div class="flex gap-x-6 mt-7 mb-16">
      <div class="flex items-center gap-x-2">
        <label for="mintable" class="cursor-pointer font-medium text-sm"
          >{{ fields.mintable.label }}:</label
        >
        <label
          for="mintable"
          class="inline-flex relative items-center cursor-pointer"
        >
          <input
            v-model="tokenForm.mintable"
            type="checkbox"
            value=""
            id="mintable"
            class="sr-only peer"
          />
          <div
            class="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
          ></div>
        </label>
      </div>

      <div class="flex items-center gap-x-2">
        <label for="burnable" class="cursor-pointer font-medium text-sm"
          >{{ fields.burnable.label }}:</label
        >
        <label
          for="burnable"
          class="inline-flex relative items-center cursor-pointer"
        >
          <input
            v-model="tokenForm.burnable"
            type="checkbox"
            value=""
            id="burnable"
            class="sr-only peer"
          />
          <div
            class="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
          ></div>
        </label>
      </div>
    </div>

    <button
      @click.prevent="createToken"
      class="w-full bg-crypto-blue hover:bg-[hsl(216,84%,38%)] text-white font-medium rounded-md py-3 transition"
    >
      Create Token
    </button>
  </form>
</template>

<script setup lang="ts">
import { emit } from "process"
import { computed } from "vue"
import { validateField } from "../../services/formService"
import toast from "../../services/toastService"
import { TokenForm, Networks } from "../../types/Token"

const props = defineProps<{
  tokenForm: TokenForm
  tokenTypes: Networks[string]["tokenTypes"]
  signer: any
}>()

const emits = defineEmits(["create-token"])

const fields = computed(() => {
  return {
    name: {
      label: "Name",
      value: props.tokenForm.name,
      required: true,
    },
    symbol: {
      label: "Symbol",
      value: props.tokenForm.symbol,
      required: true,
    },
    type: {
      label: "Type",
      value: props.tokenForm.tokenType,
      required: true,
    },
    initialSupply: {
      label: "Initial Supply",
      value: props.tokenForm.initialSupply as any as string,
      required: true,
    },
    decimals: {
      label: "Decimals",
      value: props.tokenForm.decimals as any as string,
    },
    mintable: {
      label: "Mintable",
      value: props.tokenForm.mintable,
    },
    burnable: {
      label: "Burnable",
      value: props.tokenForm.burnable,
    },
  }
})

function validateFields(formFields: typeof fields.value) {
  type FormKeys = keyof typeof formFields
  let formErrors: { [key in FormKeys]?: string | null } = {}
  let key: FormKeys

  for (key in formFields) {
    if (key !== "mintable" && key !== "burnable") {
      formErrors[key] = validateField(formFields[key], key)
    }
  }

  return Object.values(formErrors).every((field) => field === null)
    ? null
    : formErrors
}

function createToken() {
  const formErrors = validateFields(fields.value)
  const options = {
    type: "danger",
    transition: "bounce",
    timeout: 3000,
    showIcon: "true",
    hideProgressBar: "true",
  }

  if (!props.signer) {
    toast("Wallet not connected", options)
    return
  }

  if (formErrors) {
    const errors = Object.values(formErrors).filter((field) => field !== null)
    errors.forEach((error) => toast(error as string, options))
    return
  }

  emits("create-token")
}
</script>
