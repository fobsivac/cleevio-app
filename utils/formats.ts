import { format, parse } from "date-fns";

export const parseDate = (date: string) =>
  parse(date, "yyyy-MM-dd", new Date());

export const formatDate = (date: string) => format(parseDate(date), "MMM d");

export const formatDateYear = (date: string) =>
  format(parseDate(date), "MMM d, yyyy");

export const parseNum = (n: number | string | undefined): number | undefined =>
  typeof n === "number" ? n : typeof n === "string" ? +n : undefined;
