import { create } from 'zustand'

type State  = {
    isAuth: boolean;
    accessToken: string;
    clientId: string;
}

type Action = {
    isAuthCh: (auth: State['isAuth']) => void; 
    accessTokenCh:(token: State['accessToken'])=> void;
}

const useGlobalStore = create<State & Action>((set) => ({
  isAuth: true,
  accessToken: '',
  clientId:'',
  isAuthCh: (auth: boolean) => set(() => ({isAuth: auth})),
  accessTokenCh: (accessToken: string) => set(() => ({accessToken}))
}))

export default useGlobalStore