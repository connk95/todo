import { createSidebar } from "./sidebar";
import { createTaskspace } from "./tasks";

export function createBody() {
  const content = document.querySelector("#content");

  const bodyDiv = document.createElement("div");
  bodyDiv.id = "bodyDiv";
  content.appendChild(bodyDiv);

  createSidebar();
  createTaskspace();
}
