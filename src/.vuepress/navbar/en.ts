import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
    "/en-US/",
    "/en-US/about",
    {
      text: "Server",
      icon: "server",
      prefix: "/en-US/server/",
      children: ['index','developers','specialThanks']
    },
    {
      text: "Developer documentation",
      icon: "code",
      prefix: "/en-US/dev/",
      children: ['index','Http-Bot','Ntrade','KillItem'],
    },
    {
      text: "Links",
      icon: "link",
      children: [
        {
          text: 'Blog',
          link: 'https://www.mcnia.com'
        },
        {
          text: 'How to edit this document',
          link: 'https://www.mcnia.com/howtoedit'
        }
      ],
    },
]);
