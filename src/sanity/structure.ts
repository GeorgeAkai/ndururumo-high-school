import type { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Ndururumo High School")
    .items([
      S.listItem()
        .title("Site settings")
        .id("siteSettings")
        .child(S.document().schemaType("siteSettings").documentId("siteSettings")),
      S.divider(),
      S.documentTypeListItem("newsPost").title("News"),
      S.documentTypeListItem("event").title("Events"),
      S.documentTypeListItem("galleryImage").title("Gallery"),
      S.documentTypeListItem("staffMember").title("Leadership"),
    ]);
