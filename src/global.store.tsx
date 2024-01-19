import { create } from 'zustand'

type State  = {
    isAuth: boolean;
}

type Action = {
    isAuthCh: (auth: State['isAuth']) => void; 
}

const useGlobalStore = create<State & Action>((set) => ({
  isAuth: false,
  isAuthCh: (auth: boolean) => set(() => ({isAuth: auth}))
}))

export default useGlobalStore