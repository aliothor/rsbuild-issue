import { defineConfig } from '@rsbuild/core';
import { pluginVue } from '@rsbuild/plugin-vue';

export default defineConfig({
  plugins: [pluginVue()],
  tools: {
    rspack: (config, { env, addRules }) => {
      addRules({
        test: /\.html$/i,
        loader: 'html-loader',
      })
      return config;
    },
  }
});
