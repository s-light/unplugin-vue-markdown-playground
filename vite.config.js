import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

import Markdown from "unplugin-vue-markdown/vite";

import prism from "markdown-it-prism";

// const myRenderingInside = (tokens, options, env, md) => {
const myRenderingInside = async (tokens, options, env) => {
  console.log("tokens", tokens);
  console.log("options", options);
  console.log("env", env);
  // console.log("md", md);
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/], // <-- allows Vue to compile Markdown files
    }),
    Markdown({
      markdownItUses: [prism],
      transforms: {
        renderingInside: myRenderingInside,
      },
    }),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
