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
  id,
  ...props
}) => {
  const ref = React.useRef(null)

  React.useEffect(() => {
    let options: any = {
      // Don't read text from the DOM. Just use `children`.
      read: () => children,

      // Insert the svg directly (rather than inside an additional container element)
      replace: (el, svg) => {
        el.innerHTML = ""
        el.appendChild(svg)
      },
    }

    // Pass in user-provided options
    if (blockStyle !== undefined) options.style = blockStyle
    if (languages !== undefined) options.languages = languages

    // The element needs an id so scratchblocks can find it.
    // If it doesn't already have an id, generate one automatically.
    if (!id) {
      ref.current.id =
        "ScratchBlocks-" + Math.random().toString(16).slice(2, 10)
    }

    scratchblocks.renderMatching("#" + ref.current.id, options)

    // If we added a temporary id ealier, remove it now.
    if (!id) {
      ref.current.removeAttribute("id")
    }
  }, [children, blockStyle, languages, id])

  return <div ref={ref} id={id} {...props} />
}

export default ScratchBlocks
