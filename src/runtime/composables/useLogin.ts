import { computed } from "nuxt/dist/app/compat/capi"
import { useDiaryStore } from "../store"

export const useAuth = () => {
  const diaryStore = useDiaryStore()
  return {
    isLoginSuccess: computed(() => diaryStore.ready),
  }
}
