import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatYearRange(start: number, end: number | "Present") {
  return `${start} - ${end}`;
}
