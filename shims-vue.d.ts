
declare module "*.vue" {
  import type { Component } from "vue-demi";
  const component: Component<any,any,any,any,any>;
  export default component;
}
