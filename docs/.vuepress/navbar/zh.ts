import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  "/about",
  {
    text: "游玩指南",
    icon: "lightbulb",
    prefix: "/play-guide/",
    children: ['README','regulation','Illustrated'],
  },
  {
    text: "服务器相关",
    icon: "server",
    prefix: "/server/",
    children: ['README','changelog','history','developers','specialThanks','map']
  },
  {
    text: "开发者文档",
    icon: "code",
    prefix: "/dev/",
    children: ['README','Http-Bot','shop_data','Ntrade','KillItem'],
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
      },
      {
        text: "获取授权ID",
        link: "https://getid.mcnia.top",
      }
    ],
  }
]);
