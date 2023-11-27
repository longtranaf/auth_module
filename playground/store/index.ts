import { defineStore } from 'pinia'

export const useAuthStore = defineStore('counter', {
  state: () => {
    return { userList : [{
      username: 'test',
      password: 'test',
    }]
  }
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    getAuth(data: { username: string, password: string }) {
      console.log(`data`, data);
      const availableUser = this.userList.filter((user) => user.username === data.username )
      console.log(this.userList);

      console.log(this.userList.filter((user) => user.username === data.username ));

      if(availableUser.length > 0) {
        if(availableUser[0].password === data.password) {
          console.log('success');
          return true
        } else {
          console.log('false');
          return false
        }
      } else {
        console.log("push");
        this.userList.push(data)
      }
    }
  },
})
