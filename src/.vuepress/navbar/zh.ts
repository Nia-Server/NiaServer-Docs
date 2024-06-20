import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  "/about",
  {
    text: "游玩指南",
    icon: "lightbulb",
    link: "/play-guide/index"
  },
  {
    text: "服务器相关",
    icon: "server",
    link: "/server/index"
  },
  {
    text: "开发者文档",
    icon: "code",
    link: "/dev/index"
  },
  {
    text: "其他链接",
    icon: "link",
    children: [
      {
        text: 'Blog',
        link: 'https://www.mcnia.top'
      },
      {
        text: '如何编辑本文档站',
        link: 'https://www.mcnia.top/howtoedit'
      }
    ],
  }
]);
