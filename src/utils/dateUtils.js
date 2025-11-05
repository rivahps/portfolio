// Utility functions for date formatting

export function formatMonthYear(dateStr) {
  if (!dateStr) return "";
  const date = new Date(dateStr);
  if (isNaN(date)) return dateStr;
  return date.toLocaleString("default", { month: "long", year: "numeric" });
}
