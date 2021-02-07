import { format, parse } from "date-fns";

export const parseDate = (date: string) =>
  parse(date, "yyyy-MM-dd", new Date());

export const parseDatepickerDate = (date?: string | null): Date | null => {
  if (!date) return null;
  const parsed = parseDate(date);
  if (!(parsed instanceof Date) || isNaN(parsed.getTime())) return null;
  return parsed;
};

export const formatDate = (date: string) => format(parseDate(date), "MMM d");

export const formatDateYear = (date: string) =>
  format(parseDate(date), "MMM d, yyyy");

export const formatApiDate = (date: Date | [Date, Date] | null) => {
  if (!date) return null;
  if (!(date instanceof Date) || isNaN(date.getTime())) return null;
  return format(date, "yyyy-MM-dd");
};

export const parseNum = (
  n: string | undefined
): number | string | undefined => {
  if (typeof n === "string") {
    const res = parseInt(n);
    return isNaN(res) ? n : res;
  }

  return undefined;
};
