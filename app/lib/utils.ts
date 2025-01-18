import { type ClassValue, clsx } from 'clsx';
import dayjs from 'dayjs';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getRemainingDay(date: string): number {
  const datePattern = /(\w+ \d{1,2}, \d{4})/g;
  const matches = date.match(datePattern);

  if (matches && matches.length >= 2) {
    const start = dayjs(matches[0]);
    const end = dayjs(matches[1]);
    return end.diff(start, 'day');
  }
  return 0;
}

export function greeting(date: Date): string {
  const hour = dayjs(date).hour();
  if (hour < 12 && hour >= 6) {
    return 'Chúc bạn một ngày tốt lành, Rover.';
  } else if (hour < 18 && hour >= 12) {
    return 'Chào buổi chiều, Rover.';
  } else if (hour < 24 && hour >= 18) {
    return 'Chúc bạn một buổi tối tốt lành, Rover.';
  }
  return 'Rover, bạn có vẻ thức khuya nhỉ. Hãy đi ngủ sớm hơn nhé.';
}
