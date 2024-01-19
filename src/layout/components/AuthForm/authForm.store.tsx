import { create } from 'zustand'

type State  = {
    login: string;
    password: string;
    confimCode: string;
    allert: string;
}

type Action = {
    loginCh: (login: State['login']) => void; 
    passwordCh: (password: State['password']) => void; 
    confirmCodeCh: (confirmCode: State['confimCode']) => void;
    allertCh: (allert: State['allert']) => void;
    resetAuth: ()=>void; 
}

const useAuthStore = create<State & Action>((set) => ({
  login: '',
  password: '',
  confimCode: '',
  allert: '',
  loginCh: (login: string) => set(() => ({login})), 
  passwordCh: (password: string) => set(() => ({password})), 
  confirmCodeCh: (confimCode: string) => set(() => ({confimCode})),
  allertCh: (allert: string) => set(() => ({allert})),
  resetAuth: () => set(() => ({ login: '', password: '', confimCode: '',})), 
}))

export default useAuthStore