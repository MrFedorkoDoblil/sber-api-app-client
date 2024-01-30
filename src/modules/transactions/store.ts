import { create } from 'zustand'

type State  = {
    accountNumber: string;
}

type Action = {
    accountNumberCh: (newNumber: State['accountNumber']) => void;
}

const useAuthStore = create<State & Action>((set) => ({
    accountNumber: '',
    accountNumberCh: (newNumber) => set(() => ({accountNumber: newNumber})),
}))

export default useAuthStore