"use client";

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { dataset, projectId } from "./src/sanity/env";
import { schemaTypes } from "./src/sanity/schemaTypes";
import { structure } from "./src/sanity/structure";

export default defineConfig({
  name: "ndururumo",
  title: "Ndururumo High School",
  basePath: "/studio",
  projectId: projectId || "missing-project-id",
  dataset,
  schema: {
    types: schemaTypes,
    // Site settings is a singleton: hide it from the "new document" menu.
    templates: (templates) => templates.filter((t) => t.schemaType !== "siteSettings"),
  },
  document: {
    actions: (actions, { schemaType }) =>
      schemaType === "siteSettings"
        ? actions.filter((a) => a.action && ["publish", "discardChanges", "restore"].includes(a.action))
        : actions,
  },
  plugins: [structureTool({ structure })],
});
