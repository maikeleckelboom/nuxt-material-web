import {addComponentsDir, addPlugin, createResolver, defineNuxtModule} from '@nuxt/kit'

interface ModuleOptions {
}

const {resolve} = createResolver(import.meta.url)

const runtimeDir = './runtime' as const

export default defineNuxtModule<ModuleOptions>({
    meta: {
        name: 'nuxt-material-web',
        configKey: 'nuxt-material-web',
        dependencies: {}
    },
    defaults: {},
    setup: async (options: ModuleOptions, nuxt) => {
        await addComponentsDir({
            path: resolve(`${runtimeDir}/components/Button`),
            extensions: ['vue'],
            prefix: ''
        })
        await addComponentsDir({
            path: resolve(`${runtimeDir}/components/IconButton`),
            extensions: ['vue'],
            prefix: ''
        })
        await addComponentsDir({
            path: resolve(`${runtimeDir}/components/FAB`),
            extensions: ['vue'],
            prefix: ''
        })
        await addComponentsDir({
            path: resolve(`${runtimeDir}/components/Chip`),
            extensions: ['vue'],
            prefix: ''
        })
        await addComponentsDir({
            path: resolve(`${runtimeDir}/components/Checkbox`),
            extensions: ['vue'],
            prefix: ''
        })
        await addComponentsDir({
            path: resolve(`${runtimeDir}/components/Slider`),
            extensions: ['vue'],
            prefix: ''
        })

        addPlugin({
            src: resolve(`${runtimeDir}/plugin.ts`),
        })
    }
})
