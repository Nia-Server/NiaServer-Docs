import { defineUserConfig } from "vuepress";
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

  // Enable it with pwa
  // shouldPrefetch: false,
});
