## Mindset
At GVM we follow [Client-First](https://finsweet.com/client-first) in all of our projects. Client-First a wonderful naming convention developed by the Webflow agency Finsweet to make design faster and more structured, all while generating a highly legible website for those unfamiliar with the software.

Client-First is almost flawless (we're big fans). Nevertheless, we've discovered a few opportunities for improvement as we developed our low-carbon workflow. We'll call our version GV_CF.

> All of these have been incorporated into the GV cloneable [template](). 

## Classes strategy
### New utility classes
[Related Client-First docs page](https://www.finsweet.com/client-first/docs/utility-class-systems)
We've added the following utility classes we often find ourselves using in our projects.

`[div-stack]` 
Stack all children of this div
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
Hides the element visually, without obscuring it from screen readers.
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
 - *Speed*: Only one class must be added per block.
 - *Legibility*: Spacing size can be seen straight from the HTML tree.
 - *Distinction*: Since all spacing blocks use this convention, a spacing block can be quickly distinguished from a spacing wrapper by glancing at the HTML tree.

## Core Structure strategy
### Core Structure
[Related Client-First docs page](https://www.finsweet.com/client-first/docs/core-structure-strategy)
We've changed the Client-First core structure slightly. 

```
page-wrapper
[ ps | Page Structure
	global-styles
	[ hs | Header Structure 
	nav_component
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
	global-styles
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

### Global style embed
During the GV build process, the `[global-styles]` embed is extracted, concatenated with the other website styles, and minified. For more on using embeds in the GV system, see [our guide on using scripts](Scripting%20blog%20post.md).