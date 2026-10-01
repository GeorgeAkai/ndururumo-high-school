import { defineField, defineType } from "sanity";

export const event = defineType({
  name: "event",
  title: "Events",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "date", title: "Start date", type: "date", validation: (r) => r.required() }),
    defineField({ name: "endDate", title: "End date (optional)", type: "date" }),
    defineField({ name: "location", type: "string" }),
    defineField({ name: "description", type: "text", rows: 3 }),
  ],
  orderings: [{ title: "Date", name: "dateAsc", by: [{ field: "date", direction: "asc" }] }],
  preview: { select: { title: "title", subtitle: "date" } },
});
