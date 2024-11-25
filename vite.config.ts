import { defineConfig } from 'vite'
import testPluginAsJson from './plugin/testPluginAsJson'
import testPluginAsString from './plugin/testPluginAsString'


// https://vite.dev/config/
export default defineConfig({
  plugins: [testPluginAsJson(), testPluginAsString()],
})
