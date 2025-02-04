import { type ClassValue, clsx } from 'clsx';
import dayjs from 'dayjs';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getRemainingDay(start: string, end: string): number {
  const start_d = dayjs(start);
  const end_d = dayjs(end);
  return end_d.diff(start_d, 'day');
}

export function greeting(date: Date): string {
  const hour = dayjs(date).hour();
  if (hour < 12 && hour >= 6) {
    return 'Chúc bạn một ngày tốt lành, Rover.';
  } else if (hour < 18 && hour >= 12) {
    return 'Chào buổi chiều, Rover.';
  }
  return 'Chúc bạn một buổi tối tốt lành, Rover.';
}

/** Create a custom fetch function to cast type to response **/
const API = 'http://localhost:3333';
export async function api<T>(
  path: string,
  param?: string,
): Promise<T> {
  try {
    const response = await fetch(
      `${API}/${path}${param ? param : ''}`,
      {},
    );
    return (await response.json()) as T;
  } catch {
    return {} as T;
  }
}
