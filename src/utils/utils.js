export const dateFormatter = new Intl.DateTimeFormat("en-GB", {
  day: "2-digit",
  month: "long", // "short",
  year: "numeric",
});

export const dateFormatterSort = new Intl.DateTimeFormat("en-GB", {
  day: "2-digit",
  month: "short",
  year: "numeric",
});
