import create from "zustand";
import { ICountry } from "./models";

export type Store = {
  countries: ICountry[];
  setCountries: (data: ICountry[]) => void;
};

export const useStore = create<Store>((set) => ({
  countries: [],
  setCountries: (data: ICountry[]) => set({ countries: data }),
}));
