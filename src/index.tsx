import * as React from "react"

import scratchblocks from "scratchblocks"

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  blockStyle?: "scratch2" | "scratch3"
  languages?: string[]
}

const ScratchBlocks: React.FunctionComponent<Props> = ({
  blockStyle,
  languages,
  children,
  ...props
}) => {
  const ref = React.useRef(null)

  React.useEffect(() => {
    let options: any = {}
    if (blockStyle !== undefined) options.style = blockStyle
    if (languages !== undefined) options.languages = languages

    const doc = scratchblocks.parse(children, options)
    const svg = scratchblocks.render(doc, options)

    ref.current.innerHTML = ""
    ref.current.appendChild(svg)
  }, [blockStyle, languages, children])

  return <div ref={ref} {...props} />
}

export default ScratchBlocks
