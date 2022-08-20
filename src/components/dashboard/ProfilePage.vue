<template>
  <section
    class="bg-white px-3 pt-5 x-md:px-6 x-md:pt-10"
    @click.stop="togglePopup = false"
  >
    <Header page="Profile" @toggle-sidebar="$emit('toggle-sidebar', true)" />

    <!-- <div class="flex py-4"> -->
    <div class="relative flex flex-col x-md:flex-row gap-4 mt-4 py-4">
      <div
        :style="{ backgroundImage: profilePhoto }"
        class="bg-cover bg-center min-h-[8rem] min-w-[8rem] max-w-[14rem] bg-[#D9D9D9] rounded-full"
      ></div>

      <div class="mt-10">
        <h1 class="font-medium text-3xl">{{ userDetails?.name }}</h1>
        <p class="font-medium text-sm text-[#BABABA]">
          created on
          {{ new Date(userDetails?.createdAt.seconds * 1000).toDateString() }}
        </p>
      </div>

      <div class="absolute flex flex-col gap-y-1 top-0 right-0">
        <div
          class="bg-[#00000048] hover:bg-[#0000005b] py-1 px-4 rounded-lg cursor-pointer transition"
          @click.stop="togglePopup = !togglePopup"
        >
          <CogIcon class="h-5 text-white" />
        </div>

        <div
          v-show="togglePopup"
          class="absolute flex flex-col gap-y-2 right-0 top-[110%] w-[9rem] bg-[#c9c9c9] rounded-lg p-1 text-white"
        >
          <label
            for="upload-photo"
            class="flex justify-between items-center bg-[#aaaaaa57] hover:bg-green-500 text-sm rounded-md cursor-pointer transition p-1"
            @change="uploadProfilePhoto"
            @click.stop="togglePopup = false"
          >
            <input type="file" id="upload-photo" class="hidden" />
            <UploadIcon class="h-4" /> <span>Upload photo</span>
          </label>

          <div
            class="flex justify-between items-center bg-red-500 hover:bg-red-600 text-sm rounded-md cursor-pointer transition p-1"
            @click="removeProfilePhoto"
            @click.stop="togglePopup = false"
          >
            <TrashIcon class="h-4" /><span>Delete photo</span>
          </div>
        </div>
      </div>
    </div>
    <!-- </div> -->
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from "vue"
import { uploadImage } from "../../services/web3StorageService"
import { updateDocInDb } from "../../services/dbService"
import toast from "../../services/toastService"
import { auth } from "../../../firebase"
import { CogIcon, UploadIcon, TrashIcon } from "@heroicons/vue/outline"
import Header from "./Header.vue"

const props = defineProps<{ sidebarOpen: boolean; userDetails: any }>()
const emits = defineEmits(["toggle-sidebar"])

const togglePopup = ref(false)
const defaultProfilePhoto = "url('/src/assets/images/profile.jpg')"
const profilePhoto = computed(() => {
  return props.userDetails?.profilePhoto
    ? `url('${props.userDetails?.profilePhoto}')`
    : "url('/src/assets/images/profile.jpg'"
})

const toastOptions = {
  type: "success",
  transition: "bounce",
  timeout: 3000,
  showIcon: true,
  hideProgressBar: true,
}

async function uploadProfilePhoto(event: any) {
  if (event.target.files.length === 0) return

  try {
    await uploadImage(event.target.files)
    debugger
  } catch (error) {
    toastOptions.type = "danger"
    toast("Failed to upload image", toastOptions)
    return
  }

  toast("Image uploaded successfully", toastOptions)
}

async function removeProfilePhoto() {
  try {
    await updateDocInDb("users", auth.currentUser?.uid as any as string, {
      profilePhoto: "",
    })
  } catch (error) {
    toastOptions.type = "danger"
    toast("Encountered error removing image", toastOptions)
  }

  toast("Image removed successfully", toastOptions)
}
</script>
