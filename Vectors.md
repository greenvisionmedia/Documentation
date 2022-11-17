@magicpaste

# Vector Strategy
## Mindset
SVGs are a great way to add character to a site and save page weight at the same time. We want to encourage the use of lightweight, minified vector files as often as possible.

In Webflow (or any website) there are two ways to add an SVG image.

1.  As inline code, within an `<svg>` tag
2.  Linked from your assets, inside an `<img>` tag.

In Webflow, only SVG inside an embed can be given the `fill: currentcolor` property, which can be incredibly useful. But SVG images are much easier to manage with Webflow's built in tools, and much easier to compress in bulk. 

This choice can become confusing, so we've written the following guidelines to make using SVG more straightforward. We suggest two methods for adding SVG.

## SVG embed strategy
1. Add an HTML embed
2. Paste SVG code straight from your illustrator clipboard. 

Embeds containing SVG will automatically have `fill: currentcolor` applied to them via the global styles embed in the GV webflow template. 

Use this method for 
- Small SVG images, like icons, arrows and social links.
- Any SVG where it is necessary to change the color with an interaction, or with a mouse event like `::hover`.

## SVG image strategy
1. Upload the SVG to the assets panel, like you would a PNG.

Use this method for 
- Larger SVG graphics, logos, backgrounds, anything roughly larger than 10kb.

## SVG tips
As of right now, there's no good way to compress SVGs added inside embeds. Ideally, you should always delete any extraneous XML litter added by Illustrator, like `data-name="layer-1"`  or the `<?xml version="1.0" encoding="utf-8" ?>` prologue. The `<defs>` tag is usually unnecessary; fill colors can be assigned inline, i.e. `<path fill="#fff">`.

> If your svg has enough colors to require `<defs>`, consider making it an `<img>` tag instead.
