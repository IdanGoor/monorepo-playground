import * as e from "react";
const n = (o) => console.log(`Hello, ${o}!`), t = ({ onClick: o }) => {
  const l = () => {
    n("Idan"), o == null || o();
  };
  return /* @__PURE__ */ e.createElement("button", { onClick: l }, "Boop");
}, c = (o) => console.log(`Hello, ${o}!`), r = () => /* @__PURE__ */ e.createElement(t, { onClick: () => c("Ofer") });
export {
  r as SpecialButton
};
