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
    const resolver = createResolver(import.meta.url)
    if(options.addPlugin) {
      const runtimeDir  = fileURLToPath(new URL('./runtime', import.meta.url))
      nuxt.options.build.transpile.push(runtimeDir)
      addPlugin(resolve(runtimeDir, 'plugin'))
    }
    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`

    //add store
    addComponent({
      name: 'loginComponent', // name of the component to be used in vue templates
      filePath: resolver.resolve('runtime/components/loginComponent.vue')
    })
    addImports({
      name: 'useAuth', // name of the composable to be used
      as: 'useAuth',
      from: resolver.resolve('runtime/composables/useLogin') // path of composable
    })
  }
})
