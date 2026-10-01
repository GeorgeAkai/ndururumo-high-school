import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site settings",
  type: "document",
  fields: [
    defineField({ name: "schoolName", title: "School name", type: "string" }),
    defineField({ name: "motto", type: "string" }),
    defineField({ name: "email", type: "string", validation: (r) => r.email() }),
    defineField({ name: "city", type: "string" }),
    defineField({ name: "principalName", title: "Principal's name", type: "string" }),
    defineField({ name: "principalPhoto", title: "Principal's photo", type: "image", options: { hotspot: true } }),
    defineField({
      name: "principalMessage",
      title: "Principal's message",
      type: "array",
      of: [{ type: "text", rows: 4 }],
      description: "One entry per paragraph.",
    }),
    defineField({ name: "enrollment", title: "Number of students", type: "number" }),
    defineField({ name: "heroImage", title: "Homepage photo", type: "image", options: { hotspot: true } }),
  ],
  preview: { prepare: () => ({ title: "Site settings" }) },
});
