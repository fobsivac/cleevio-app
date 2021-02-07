import create from "zustand";
import { ICountry } from "./models";

export type Store = {
  countries: ICountry[];
  setCountries: (data: ICountry[]) => void;
  navbar: boolean;
  toggleNavbar: () => void;
  setNavbar: (val: boolean) => void;
};

export const useStore = create<Store>((set, get) => ({
  countries: [],
  setCountries: (data: ICountry[]) => set({ countries: data }),
  navbar: false,
  toggleNavbar: () => set({ navbar: !get().navbar }),
  setNavbar: (val: boolean) => set({ navbar: val }),
}));
