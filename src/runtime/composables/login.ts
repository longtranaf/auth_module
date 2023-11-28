
  import {useAuthStore} from '../store/index'
  export const useLogin = (username: string, password: string, message: string, emit: any) => {
    if(useAuthStore().getAuth({
      username: username,
      password: password
    })) {
      message = 'Login Success'
      console.log('Success');
      emit('loginSuccess', message)
    } else {
      message = 'Login Failed'
      console.log('Failed');
      emit('loginFailed', message)
    }
}
