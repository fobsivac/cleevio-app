import { ICountry } from "../utils/models";
import api from "../utils/api";

export const getCountries = () => api.get<ICountry[]>(`/country`);
