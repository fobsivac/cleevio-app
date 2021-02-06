import api from "../utils/api";
import { ITrip, ITripData } from "../utils/models";

export const getTrips = () => api.get<ITrip[]>(`/trip`);

export const getTrip = (id: string) => api.get<ITrip>(`/trip/${id}`);

export const createTrip = (data: ITripData) =>
  api.post<{ id: string }>(`/trip`, data);

export const editTrip = (id: string, data: ITripData) =>
  api.put<{ id: string }>(`/trip/${id}`, data);

export const removeTrip = (id: string) => api.delete(`/trip/${id}`);
