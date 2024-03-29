# Test color modes

The background color should be `#ffffff` for light mode and `#0d1117` for dark mode.



<hr>

# Rough.js

<b>Rough.js</b> is a small (<9kB gzipped) graphics library that lets you draw in a _sketchy_, _hand-drawn-like_, style.
The library defines primitives to draw lines, curves, arcs, polygons, circles, and ellipses. It also supports drawing [SVG paths](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths).

Rough.js works with both [Canvas](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API) and [SVG](https://developer.mozilla.org/en-US/docs/Web/SVG).

![Rough.js sample](https://roughjs.com/images/cap_demo.png)

[@RoughLib](https://twitter.com/RoughLib) on Twitter.

## Install

The latest Rough.js can be downloaded from the [dist folder](https://github.com/pshihn/rough/tree/master/dist).

or from npm:

```
npm install --save roughjs
```

## Usage

![Rough.js rectangle](https://roughjs.com/images/m1.png)

```js
const rc = rough.canvas(document.getElementById('canvas'));
rc.rectangle(10, 10, 200, 200); // x, y, width, height
```

or SVG

```js
const rc = rough.svg(svg);
let node = rc.rectangle(10, 10, 200, 200); // x, y, width, height
svg.appendChild(node);
```

### Lines and Ellipses

![Rough.js rectangle](https://roughjs.com/images/m2.png)

```js
rc.circle(80, 120, 50); // centerX, centerY, diameter
rc.ellipse(300, 100, 150, 80); // centerX, centerY, width, height
rc.line(80, 120, 300, 100); // x1, y1, x2, y2
```

### Filling

![Rough.js rectangle](https://roughjs.com/images/m3.png)

```js
rc.circle(50, 50, 80, { fill: 'red' }); // fill with red hachure
rc.rectangle(120, 15, 80, 80, { fill: 'red' });
rc.circle(50, 150, 80, {
  fill: "rgb(10,150,10)",
  fillWeight: 3 // thicker lines for hachure
});
rc.rectangle(220, 15, 80, 80, {
  fill: 'red',
  hachureAngle: 60, // angle of hachure,
  hachureGap: 8
});
rc.rectangle(120, 105, 80, 80, {
  fill: 'rgba(255,0,200,0.2)',
  fillStyle: 'solid' // solid fill
});
```

Fill styles can be: **hachure**(default), **solid**, **zigzag**, **cross-hatch**, **dots**, **dashed**, or **zigzag-line**

![Rough.js fill examples](https://roughjs.com/images/m14.png)

### Sketching style

![Rough.js rectangle](https://roughjs.com/images/main/m4.png)

```js
rc.rectangle(15, 15, 80, 80, { roughness: 0.5, fill: 'red' });
rc.rectangle(120, 15, 80, 80, { roughness: 2.8, fill: 'blue' });
rc.rectangle(220, 15, 80, 80, { bowing: 6, stroke: 'green', strokeWidth: 3 });
```

### SVG Paths

![Rough.js paths](https://roughjs.com/images/m5.png)

```js
rc.path('M80 80 A 45 45, 0, 0, 0, 125 125 L 125 80 Z', { fill: 'green' });
rc.path('M230 80 A 45 45, 0, 1, 0, 275 125 L 275 80 Z', { fill: 'purple' });
rc.path('M80 230 A 45 45, 0, 0, 1, 125 275 L 125 230 Z', { fill: 'red' });
rc.path('M230 230 A 45 45, 0, 1, 1, 275 275 L 275 230 Z', { fill: 'blue' });
```

SVG Path with simplification:

![Rough.js texas map](https://roughjs.com/images/m9.png) ![Rough.js texas map](https://roughjs.com/images/m10.png)

## Examples

![Rough.js US map](https://roughjs.com/images/m6.png)

[View examples here](https://github.com/pshihn/rough/wiki/Examples)

## API & Documentation

[Full Rough.js API](https://github.com/pshihn/rough/wiki)

## Credits

Some of the core algorithms were adapted from [handy](https://www.gicentre.net/software/#/handy/) processing lib.

Algorithm to convert SVG arcs to Canvas [described here](https://www.w3.org/TR/SVG/implnote.html) was adapted from [Mozilla codebase](https://hg.mozilla.org/mozilla-central/file/17156fbebbc8/content/svg/content/src/nsSVGPathDataParser.cpp#l887)

## License
[MIT License](https://github.com/pshihn/rough/blob/master/LICENSE) (c) [Preet Shihn](https://twitter.com/preetster)


| Color | Syntax | Example | Output |
| --- | --- | --- | --- |
| HEX | <code>\`#RRGGBB\`</code> | <code>\`#0969DA\`</code> | ![Rendered supported color model in HEX format.](/assets/images/help/writing/supported-color-models-hex-rendered.png) |
| RGB | <code>\`rgb(R,G,B)\`</code> | <code>\`rgb(9, 105, 218)\`</code> | ![Rendered supported color model in RGB format.](/assets/images/help/writing/supported-color-models-rgb-rendered.png) |
| HSL | <code>\`hsl(H,S,L)\`</code> | <code>\`hsl(212, 92%, 45%)\`</code> | ![Rendered supported color model in HSL format.](/assets/images/help/writing/supported-color-models-hsl-rendered.png) |
| HEX | <code>\`#RRGGBB\`</code> | <code>\`#0969DA\`</code> | `#0969DA` |
| RGB | <code>\`rgb(R,G,B)\`</code> | <code>\`rgb(9, 105, 218)\`</code> | `rgb(9, 105, 218)` |
| HSL | <code>\`hsl(H,S,L)\`</code> | <code>\`hsl(212, 92%, 45%)\`</code> | `hsl(212, 92%, 45%)` |
