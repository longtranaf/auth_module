import { defineNuxtModule, addPlugin, addImports, addComponent, createResolver } from '@nuxt/kit'
import { resolve } from 'path'
import { fileURLToPath } from 'url'
// Module options TypeScript interface definition
export interface ModuleOptions {
  addPlugin?: boolean,
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'auth-module',
    configKey: 'authModule'
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  setup (options, nuxt) {
    if(options.addPlugin) {
      const runtimeDir  = fileURLToPath(new URL('./runtime', import.meta.url))
      nuxt.options.build.transpile.push(runtimeDir)
      addPlugin(resolve(runtimeDir, 'plugin'))
    }
    const resolver = createResolver(import.meta.url)
    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    addPlugin(resolver.resolve('./runtime/plugin'))

    addComponent({
      name: 'loginComponent', // name of the component to be used in vue templates
      export: 'loginComponent', // (optional) if the component is a named (rather than default) export
      filePath: resolver.resolve('runtime/components/loginComponent.vue')
    })
  }
})
