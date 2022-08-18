import { createToast } from "mosha-vue-toastify"
import "mosha-vue-toastify/dist/style.css"

export default function toast(content: string, options?: any) {
  options ? createToast(content, options) : createToast(content)
}
