import { create } from "zustand";

type Store = {
    auth: boolean;
    userId: string;
    userName: string;
    toggle: () => void;
};

export const useAuth = create<Store>()((set) => ({
    auth: false,
    userId: "420",
    userName: "Juanpa",
    toggle: () => set((state) => ({ auth: !state.auth })),
}));
