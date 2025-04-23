import { createElementBlock as c, openBlock as l, createElementVNode as s } from "vue";
const a = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, r] of t)
    n[o] = r;
  return n;
}, i = {};
function m(e, t) {
  return l(), c("div", null, t[0] || (t[0] = [
    s("h1", null, "Image Picker", -1)
  ]));
}
const _ = /* @__PURE__ */ a(i, [["render", m]]), d = {
  install(e) {
    e.component("ImagePicker", _);
  }
};
export {
  _ as ImagePicker,
  d as default
};
