// Plain tsc (no vue-tsc) needs this to resolve .vue imports.
// Keep this file free of top-level import/export: a wildcard module
// declaration only works in a global (non-module) declaration file.
declare module '*.vue' {
  import type { DefineComponent } from 'vue'

  const component: DefineComponent
  export default component
}
