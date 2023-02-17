---
title: Vectors
eleventyNavigation:
    key: Vectors
---

# Vector Strategy

## Mindset

SVGs are a great way to add character to a site and save page weight at the same
time. We want to encourage the use of lightweight, minified vector files as
often as possible.

## Webflow SVG strategy

In Webflow (or any website) there are two ways to add an SVG image.

1.  As inline code, within an `<svg>` tag
2.  Linked from your assets, inside an `<img>` tag.

In Webflow, only SVG inside an embed can be given the `fill: currentcolor`
property, which can be incredibly useful. But SVG images are much easier to
manage with Webflow's built in tools, and much easier to compress in bulk.

This choice can become confusing, so we've written the following guidelines to
make using SVG more straightforward. We suggest two methods for adding SVG.

### SVG image strategy

1. Upload the SVG to the assets panel, like you would a PNG.

Use this method for

-   Larger SVG graphics, logos, backgrounds, anything roughly larger than 10kb.

### SVG embed strategy

1. Add an HTML embed
2. Paste SVG code straight from your illustrator clipboard.

Embeds containing SVG will automatically have `fill: currentcolor` applied to
them via the global styles embed in the GV webflow template.

Use this method for

-   Small SVG images, like icons, arrows and social links.
-   Any SVG where it is necessary to change the color with an interaction, or
    with a mouse event like `::hover`.

#### GV Extension

The GV extension will automatically detect SVG data in the clipboard and minify
it before you paste into the embed.

SVG code before minification

```

```

SVG code after

```

```

## SVG global markup strategy

Some SVG properties were built specifically for reusability. These integrate
beautifly with the [Client-First]() convention, and they can provide some really
impressive effects with barely any performance impact.

### Gradients

### Filters
