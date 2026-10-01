import { defineField, defineType } from "sanity";

export const galleryImage = defineType({
  name: "galleryImage",
  title: "Gallery",
  type: "document",
  fields: [
    defineField({ name: "image", type: "image", options: { hotspot: true }, validation: (r) => r.required() }),
    defineField({ name: "caption", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "category",
      type: "string",
      options: { list: ["Campus", "Academics", "Sports", "Clubs", "Events", "Alumni"] },
    }),
    defineField({ name: "takenAt", title: "Date taken", type: "date" }),
  ],
  preview: { select: { title: "caption", subtitle: "category", media: "image" } },
});
