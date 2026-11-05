export const startHour = 8;
export const endHour = 22;
export const slotHeight = 48;

export function timeToMinutes(time: string) {
  if (!/^([01]\d|2[0-3]):[0-5]\d$/.test(time)) throw new Error(`Invalid time: ${time}`);
  const [hour, minute] = time.split(":").map(Number);
  return hour * 60 + minute;
}

export function getPosition(start: string, end: string) {
  const startMinutes = timeToMinutes(start);
  const endMinutes = timeToMinutes(end);

  if (endMinutes <= startMinutes) throw new Error("End must follow start");
  const top =
    ((startMinutes - startHour * 60) / 30) * slotHeight;

  const height =
    ((endMinutes - startMinutes) / 30) * slotHeight;

  return { top, height };
}

export function getHourLabel(hour: number) {
  return `${hour.toString().padStart(2, "0")}:00`;
}

