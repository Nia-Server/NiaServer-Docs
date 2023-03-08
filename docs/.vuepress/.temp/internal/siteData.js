export const siteData = JSON.parse("{\"base\":\"/\",\"lang\":\"en-US\",\"title\":\"\",\"description\":\"\",\"head\":[[\"link\",{\"rel\":\"icon\",\"href\":\"/1.jpg\"}]],\"locales\":{\"/\":{\"lang\":\"zh-CN\",\"title\":\"NIA服务器文档站\",\"description\":\"v4.0\"},\"/en-US/\":{\"lang\":\"en-US\",\"title\":\"NIA Server Docs\",\"description\":\"v4.0\"}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
