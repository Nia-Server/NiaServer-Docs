import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
    "/en-US/",
    {
      text: "Server",
      icon: "server",
      prefix: "/en-US/server/",
      children: ['README','developers','specialThanks']
    },
    {
      text: "Developer documentation",
      icon: "code",
      prefix: "/en-US/dev/",
      children: ['README','Http-Bot','Ntrade','KillItem'],
    },
    {
      text: "Links",
      icon: "link",
      children: [
        {
          text: 'Blog',
          link: 'https://www.mcnia.top'
        },
        {
          text: 'How to edit this document',
          link: 'https://www.mcnia.top/howtoedit'
        }
      ],
    },
]);
