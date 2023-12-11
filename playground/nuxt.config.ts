
export default defineNuxtConfig({
  modules: ['../src/module', '@pinia/nuxt','@pinia-plugin-persistedstate/nuxt'],
  authModule: {},
  devtools: { enabled: true },
})
