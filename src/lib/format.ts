const dateFormat = new Intl.DateTimeFormat("en-KE", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "Africa/Nairobi",
});

/** Formats a `YYYY-MM-DD` date, e.g. "12 February 2027". */
export function formatDate(date: string): string {
  return dateFormat.format(new Date(`${date}T12:00:00+03:00`));
}

export function dateParts(date: string) {
  const d = new Date(`${date}T12:00:00+03:00`);
  return {
    day: d.toLocaleDateString("en-KE", { day: "numeric", timeZone: "Africa/Nairobi" }),
    month: d.toLocaleDateString("en-KE", { month: "short", timeZone: "Africa/Nairobi" }),
  };
}
