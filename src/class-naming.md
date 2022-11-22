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

We've changed the Client-First core structure slightly:

![webflow-core-structure.png]

### Symbol macros

This structure has the **component macros** included. These are the green components with a pipe | in the name.

To use symbol macros:

1. Hit <kbd>Ctrl</kbd> + <kbd>E</kbd> to open the quick find window.
2. Type the two letter macro and hit enter.
3. Hit <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>A</kbd> to unlink the component.

![webflow-quick-finder.png]

Voila: fast, DRY consistent page structuring. We recommend keeping these macros linked until you've finished any changes you want to carry through the next time you use the symbol.

> The structure of your symbol macros don't need to follow this exact pattern, nor are you limited to just these macros. We included these three in our template for convenience.

### Header strategy

We've changed `.section_header` in Client-First to `.header_[name]` to better reflect the underlying HTML structure. Headers should always have the semantic HTML tag `<header>`.

### Global styles component

We often found we were going over Webflow's 10,000 character limit in the single style embed. To get around this, we changed the single `.global-styles` embed included with vanilla Client-First to a wrapper div called `.gv-styles`. This lets us add a new embed whenever we reach the limit.

As an optional best practice, we like to add a new embed for each page; if the page called 'news' needs it's own styles, you can add a `.news-styles` embed with that CSS. The benefit here is  organization, so you can find the CSS specific to a page easily. Truly global CSS can stay in `.global-styles`, and we find using this strategy usually keeps the global styles embed below 10,000 characters.

During the GV [build process](#), the `.gv-styles` node is parsed and any div with a `.w-embed` class is extracted. All the CSS code inside will combined and added to a single minified CSS file, to reduce HTTP requests and inline styles.

## Page structure strategy

Because GV exports and hosts webflow's static files, the final URL ends up with an ugly '.html' suffix. There are hacks to get rid of this, but the most bulletproof method is to change the directory structure of the site itself. 

![wrong-URL.png]

Web hosts will automatically detect any HTML file inside a website subdirectory called `index.html` or `default.html`, and essentially assign that file as the 'homepage' of the subdirectory. We can do this directly in Webflow.

When you create a new page in Webflow, follow these steps:
1. Create a folder
2. Name the folder what you want the page name to be.
3. Create a new page inside this folder, with the same name
4. Change the slug to 'default'

![webflow-page-settings.png]

The final webflow page structure will look something like this for a simple site structure.

![webflow-page-structure.png]

The web host will automatically change the `https://website.com/subdirectory/default.html` to `https://website.com/subdirectory/`, like so.

![right-URL.png]