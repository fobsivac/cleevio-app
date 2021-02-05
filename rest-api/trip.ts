import api from "../utils/api";
import { Trip, TripData } from "../utils/models";

export const getTrips = () => api.get<Trip[]>(`/trip`);

export const getTrip = (id: string) => api.get<Trip>(`/trip/${id}`);

export const createTrip = (data: TripData) =>
  api.post<{ id: string }>(`/trip`, data);

export const editTrip = (id: string, data: TripData) =>
  api.put<{ id: string }>(`/trip/${id}`, data);

export const removeTrip = (id: string) => api.delete(`/trip/${id}`);
