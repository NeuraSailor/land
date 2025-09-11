import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { JSResource } from "../util/resources"
import { clone } from "../util/path"

const CustomHead: QuartzComponent = ({ cfg, fileData, externalResources }: QuartzComponentProps) => {
  const title = fileData.frontmatter?.title ?? "Untitled"
  const description = fileData.description?.trim() ?? "No description provided"
  
  return (
    <>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="referrer" content="no-referrer" />
      <title>{title}</title>
      <meta name="description" content={description} />
      {/* 其他必要的 meta 标签 */}
    </>
  )
}

CustomHead.css = `
/* 自定义样式 */
`

export default (() => CustomHead) as QuartzComponentConstructor