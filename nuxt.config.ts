import nodeResolve from '@rollup/plugin-node-resolve'

export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: {
    strict: true,
    typeCheck: true
  },
  modules: ['~/modules/material-web/module.ts', '@nuxtjs/tailwindcss', 'nuxt-icon'],
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => tag.startsWith('md-')
    }
  },
  vite: {
    plugins: [
      nodeResolve({
        exportConditions: ['production']
      })
    ]
  }
})
