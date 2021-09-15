# createnanoidenticon-svg

A simple library that generates SVG Nanoidenticons. Exports two functions:

## createNanoidenticonSvg

Creates an SVG Element.

## createNanoidenticon

Returns an object containing svg and path attributes. Easier to work with for certain ui libraries e.g. with JSX:

```jsx
const nanoidenticon = createNanoidenticon(address);

<svg viewBox={nanoidenticon.address}>
  {nanoidenticon.paths.map((v) => (
    <path {...v} />
  ))}
</svg>;
```
