---
title: Class Naming
eleventyNavigation:
    key: Class Naming
---

# Class Naming Strategy

## Mindset

At GVM we follow [Client-First](https://finsweet.com/client-first), a powerful
naming convention developed by the Webflow agency Finsweet. Client-First makes
designing in Webflow faster and more structured, and leaves clients with a
highly legible HTML structure, helpful for those unfamiliar with the software.
The consistency of Client-First also lends itself to our build process.

Client-First is almost flawless (we're big fans). Nevertheless, we've discovered
a few opportunities for improvement as we developed our low-carbon workflow.
We'll keep track of any changes to the vanilla Client-First system here.

> All of these changes have been incorporated into the GV webflow
> [template](https://preview.webflow.com/preview/gv-template?utm_medium=preview_link&utm_source=dashboard&utm_content=gv-template&preview=a7478f51e9f47fecf64f59752f832e30&workflow=preview).

## Classes strategy

[Related Client-First docs page](https://www.finsweet.com/client-first/docs/utility-class-systems)

We've added the following utility classes we often find ourselves using in our
projects.

#### `.div-stack`

Stack all children of this div on top of each other. Can be helpful for layering
[embedded SVGs](/vectors).

```
.div-stack {
	display: grid;
}

.div-stack > * {
	position: relative;
	grid-column-end: 2;
	grid-column-start: 1;
	grid-row-end: 2;
	grid-row-start: 1;
	fill: currentColor;
}
```

#### `.hide-visually`

Hides the element visually, without obscuring it from screen readers. Also
visible if accessed via the keyboard.

```
.hide-visually:not(:focus):not(:active) {
	clip: rect(0 0 0 0) !important;
	clip-path: inset(50%) !important;
	height: 1px !important;
	width: 1px !important;
	overflow: hidden !important;
	position: absolute !important;
	white-space: nowrap !important;
}
```

#### `.text-style-antialiased`

We removed the `font-smoothing: antialiased` property that was applied to the
`<body>` tag by the vanilla Client-First styles embed, and we've replaced it
with an optional utility class.

```
.text-style-antialiased {
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	font-smoothing: antialiased;
}
```

If you're curious, you can read more about why overriding the browser's default
font smoothing globally
[isn't a great idea](https://usabilitypost.com/2012/11/05/stop-fixing-font-smoothing/).
The property `text-rendering: optimizeLegibility` has been removed for similar
reasons.

## Spacing strategy

[Related Client-First docs page](https://www.finsweet.com/client-first/docs/spacing-strategy/#spacing-block-strategy)

Instead of adding `.padding-bottom` + `.padding-size` to a spacing block, simply
add `.padding-size`.

Benefits:

-   _Speed_: Only one class must be added per block.
-   _Legibility_: Spacing size can be seen straight from the HTML tree.
-   _Distinction_: Since only scpacing blocks use this strategy, a spacing block
    can be quickly distinguished from a spacing wrapper by glancing at the HTML
    tree.

## Core Structure strategy

[Related Client-First docs page](https://www.finsweet.com/client-first/docs/core-structure-strategy)

We've changed the Client-First core structure slightly.

![A screenshot of the webflow navigator on GV's webflow template](webflow-core-structure.png)

### Symbol macros

This structure includes what we're calling **component macros**. These are the
green components with a pipe | in their name.

To use component macros:

1. Hit <kbd>Ctrl</kbd> + <kbd>E</kbd> to open the quick find window.
2. Type the two letter macro and hit enter.
3. Hit <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>A</kbd> to unlink the
   component.

![webflow quickfinder](webflow-quick-finder.png)

This is a super fast, DRY way to add the Client-First structure. We recommend
waiting to unlink the s until you've finished any changes you want to carry
through the next time you use the symbol.

> The structure of your symbol macros don't need to follow this exact pattern,
> nor are you limited to just these macros. We included these three in our
> template for convenience.

### Header strategy

We've changed `.section_header` in Client-First to `.header_[name]` to better
reflect the underlying HTML structure. Headers should always have the semantic
HTML tag `<header>`.

### Global styles component

We've made a few subtle modificatons to the `.global-styles` component in
vanilla Client-First.

#### Style wrapper

We often found we were going over Webflow's 10,000 character limit in the single
style embed. To get around this, we changed the single `.global-styles` embed to
a wrapper div called `.gv-styles`. We can include as many embeds inside this
wrapper as we want.

> A convenient habit is to add a new embed for each page. If the page called
> 'news' needs it's own styles, you can add a new embed inside `.gv-styles` with
> the classname `.news-styles`

#### Minification

During the GV [build process](#), the `.gv-styles` node is parsed and any div
with a `.w-embed` class is extracted. All the CSS code inside will combined and
added to a single minified CSS file, to reduce HTTP requests and inline styles.
