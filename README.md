# scratchblocks-react

Render [scratchblocks](https://github.com/scratchblocks/scratchblocks) in React!

## Installation

```bash
npm install scratchblocks scratchblocks-react
# or
yarn add scratchblocks scratchblocks-react
```

Note that in addition to the `scratchblocks-react` package, you must have `scratchblocks` installed (and `react`).

## Usage

### Simple

```jsx
import ScratchBlocks from "scratchblocks-react"

function MyComponent() {
  return (
    <ScratchBlocks blockStyle="scratch3">
      {`
        when green flag clicked
        forever
          move (10) steps
        end
      `}
    </ScratchBlocks>
  )
}
```

### Dynamic

In this example, the user can edit the Scratch code.

```jsx
import ScratchBlocks from "scratchblocks-react"

function MyComponent() {
  const [code, setCode] = useState("move (10) steps")

  return (
    <div>
      <textarea
        value={code}
        onChange={(event) => setCode(event.target.value)}
      />
      <ScratchBlocks blockStyle="scratch3">{code}</ScratchBlocks>
    </div>
  )
}
```

### Non-English Languages

```jsx
import ScratchBlocks from "scratchblocks-react"

// Load some extra languages (English comes loaded by default)
import scratchblocks from "scratchblocks"
import es from "scratchblocks/locales/es.json" // Spanish
import de from "scratchblocks/locales/de.json" // German

// Register the language files with scratchblocks
scratchblocks.loadLanguages({ es, de })

function MyComponent() {
  return (
    <ScratchBlocks
      blockStyle="scratch3"
      languages={["en", "es", "de"]} // Choose which languages to allow
    >
      {`
        when green flag clicked
        por siempre
          gehe (10) er Schritt
        fin
      `}
    </ScratchBlocks>
  )
}
```

## Available Props

| Name          | Default    | Valid Values                                    | Description                                                                           |
| ------------- | ---------- | ----------------------------------------------- | ------------------------------------------------------------------------------------- |
| blockStyle    | "scratch2" | "scratch2" or "scratch3"                        | Changes the visual style of the rendered blocks.                                      |
| languages     | ["en"]     | An array of language codes such as ["en", "de"] | Enables the use of non-english languages. Requires additional setup.                  |
| ... and more! |            |                                                 | All other props (such as "className" and "style") will be passed directly to the div. |
