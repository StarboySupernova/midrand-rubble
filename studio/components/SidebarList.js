import S from "@sanity/desk-tool/structure-builder";
import { MdStar } from "react-icons/md";

function SidebarList() {
  return S.list()
    .title("Midrand Rubble Removal & Site Clearing")
    .items([
      S.listItem()
        .title("Spotlight")
        .id("spotlightItems")
        .icon(MdStar)
        .child(S.editor().schemaType("spotlight").documentId("spotlightItems")),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() !== "spotlight",
      ),
    ]);
}

export default SidebarList;
