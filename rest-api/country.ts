import { Country } from "../utils/models";
import api from "../utils/api";

export const getCountries = () => api.get<Country[]>(`/country`);
