import * as e from "react";
const n = (t) => console.log(`Hello, ${t}!`), a = ({ onClick: t }) => {
  const o = () => {
    n("Idan"), t == null || t();
  };
  return /* @__PURE__ */ e.createElement("button", { onClick: o }, "Boop");
};
export {
  a as Button
};
