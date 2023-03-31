
declare module "*.vue" {
  import type { Component } from "vue-demi";
  const component: Component;
  export default component;
}
