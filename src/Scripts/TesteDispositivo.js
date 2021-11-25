import { Container } from "./Script.js";

export function DetectPhone() {
  var uagent = navigator.userAgent.toLowerCase();
  if (uagent.search("android" || "iphone") > -1) {
    Container.style.width = window.outerWidth * 0.5;
  } else {
    Container.style.width = "60%";
  }
}
