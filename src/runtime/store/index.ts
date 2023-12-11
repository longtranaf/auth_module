import { useCookie } from 'nuxt/app';
import { defineStore,acceptHMRUpdate  } from 'pinia'

export const useDiaryStore = defineStore('user', {
  state: () => {
    return {
      userList :
        [
          {
            username: 'test',
            password: 'test'
          }
        ],
      ready: false,
  }
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  getters: {
    getReady: (state) => {
      return state.ready;
    }
  },
  actions: {
    getAuth(data: { username: string, password: string }) {
      console.log(`data`, data);
      const availableUser = this.userList.filter((user) => user.username === data.username )
      console.log(this.userList);

      console.log(this.userList.filter((user) => user.username === data.username ));

      if(availableUser.length > 0) {
        if(availableUser[0].password === data.password) {
          console.log('success');
          this.ready = true
          //save to cookies
          return true
        } else {
          console.log('false');
          return false
        }
      }
    }
  },
  persist: true,
},
)
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useDiaryStore, import.meta.hot))
}
