import { useAuthStore } from "../store"

export const useAuth = (data: any) => {
  return useAuthStore().getAuth(data)
}
