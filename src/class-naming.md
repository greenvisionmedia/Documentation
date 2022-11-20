# Class Naming Strategy

## Mindset

At GVM we follow [Client-First](https://finsweet.com/client-first), a powerful naming convention developed by the Webflow agency Finsweet. Client-First makes designing in Webflow faster and more structured, and leaves clients with a highly legible HTML structure, helpful for those unfamiliar with the software. The consistency of Client-First also lends itself to our build process. 

Client-First is almost flawless (we're big fans). Nevertheless, we've discovered a few opportunities for improvement as we developed our low-carbon workflow. We'll keep track of any changes to the vanilla Client-First system here.

> All of these changes have been incorporated into the GV webflow [template](https://preview.webflow.com/preview/gv-template?utm_medium=preview_link&utm_source=dashboard&utm_content=gv-template&preview=a7478f51e9f47fecf64f59752f832e30&workflow=preview).

## Classes strategy

### New utility classes

[Related Client-First docs page](https://www.finsweet.com/client-first/docs/utility-class-systems)

We've added the following utility classes we often find ourselves using in our projects.

`[div-stack]`
Stack all children of this div on top of each other. Can be helpful for layering [embedded SVGs](/vectors).

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

`[hide-visually]`
Hides the element visually, without obscuring it from screen readers. Also visible if accessed via the keyboard.

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

## Spacing strategy

### Spacing block strategy

[Related Client-First docs page](https://www.finsweet.com/client-first/docs/spacing-strategy/#spacing-block-strategy)

Instead of adding `.padding-bottom` + `.padding-size` to a spacing block, simply add `.padding-size`.

Benefits:

-   _Speed_: Only one class must be added per block.
-   _Legibility_: Spacing size can be seen straight from the HTML tree.
-   _Distinction_: Since only scpacing blocks use this strategy, a spacing block can be quickly distinguished from a spacing wrapper by glancing at the HTML tree.

## Core Structure strategy

### Core Structure

[Related Client-First docs page](https://www.finsweet.com/client-first/docs/core-structure-strategy)

We've changed the Client-First core structure slightly.

```
page-wrapper
[ ps | Page Structure
	global-styles
	nav_component
	[ hs | Header Structure
		header_[header-name]
			padding-global
				container-large
					padding-section-large
						...
	]
	[ ss | Section Structure
		section_[section-name]
			padding-global
				container-large
					padding-section-large
						...
	]
	footer_component
]
```

### Symbol macros

This structure has the added benefit of **symbol macros** (Shown above with `[ xx | X Structure ]`).

To use symbol macros:

1. Hit <kbd>Ctrl</kbd> + <kbd>E</kbd> to open the finder
2. Type the two letter macro and hit enter.
3. Hit <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>A</kbd> to unlink the symbol.

Voila: fast, DRY consistent page structuring.

> The structure of your symbol macros don't need to follow this exact pattern, nor are you limited to just these macros.

### Header strategy

We've changed `.section_header` in Client-First to `.header_[name]` to better reflect the underlying HTML structure. Headers should always be given the semantic HTML tag `<header>`.

### Global styles symbol

During the GV [build process](#), the `[global-styles]` embed is extracted, concatenated with the other website styles, and minified.
