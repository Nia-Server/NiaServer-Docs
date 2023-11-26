import { defineUserConfig } from "vuepress";
import { docsearchPlugin } from "@vuepress/plugin-docsearch";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "NIA服务器",
      description: "一个基于BDS的Minecraft服务器",
    },
    "/en-US/": {
      lang: "en-US",
      title: "NIA-Server",
      description: "A Minecraft server based on BDS",
    },
  },

  theme,

  plugins: [
    docsearchPlugin({
      appId: "BH4D9OD16A",
      apiKey: "f5b5b3c2a2f0e6e5b1f4d1f2b2f3c0e1",
      indexName: "mcnia",
    }),
  ]

  // Enable it with pwa
  // shouldPrefetch: false,
});
