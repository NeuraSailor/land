import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/jackyzha0/quartz",
      "Discord Community": "https://discord.gg/cRFFHYye7t",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
        { Component: Component.ReaderMode() },
      ],
    }),
    Component.Explorer(),
  ],
  right: [
    Component.Graph({
      localGraph: {

        depth: 2,                // 显示多少跳的关联笔记 (1 = 直接关联)
        scale: 2,              // 默认视图缩放比例
        repelForce: 0.5,         // 节点之间的排斥力 (0-1)
        centerForce: 0.3,        // 居中力度 (0-1)
        linkDistance: 30,        // 连接线的默认长度
        fontSize: 0.6,           // 节点标签字体大小
        opacityScale: 1,         // 缩放时标签淡出速度
        removeTags: [],          // 从图谱中移除的标签
        showTags: true,          // 是否显示标签节点
        enableRadial: true,     // 是否启用径向约束（类似 Obsidian）
      },
      globalGraph: {
        drag: true,
        zoom: true,
        depth: -1,               // -1 表示显示所有关联
        scale: 0.9,              // 全局图谱默认更小的缩放
        repelForce: 0.5,
        centerForce: 0.3,
        linkDistance: 30,
        fontSize: 0.6,
        opacityScale: 1,
        removeTags: [],          // 可以设置如 ["private", "draft"] 隐藏特定标签
        showTags: true,
        enableRadial: true,      // 全局图谱通常启用径向约束
      },
    }),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
    Component.Explorer(),
  ],
  right: [],
}
