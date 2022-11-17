# Scripting Strategy

## Mindset

Scripting with a CMS like Webflow is tricky, and it's even trickier to add scripts without bloating the page weight.

At GV we needed a way to easily and quickly add additional functionality to our projects, without needing too much extra processing power.

We're basing our strategy on OG web performance optimizer Steve Souder's [14 Rules for Faster-Loading Web Sites. ](https://stevesouders.com/examples/rules.php).

-   _Rule 6_: Put scripts at the bottom
-   _Rule 8_: Make Javascript external
-   _Rule 10_: Minify Javascript

## Script strategy

We've created GitHub repositories for the scripts we commonly used, and created a pipeline to automatically add them to your site. To include one of these scripts, you only need to follow two steps:

1. Add an HTML embed or inline element and give it a class like `.gv-[script-name]`.
2. Optionally, change data-attributes to change script options
3. Add a script tag to the document head with the following format `<script src="./js/[script-name].min.js defer">`
4. Add the scripts you used in the project to the Pusherman options

> If the script is only used on one page, only add the script tag to the custom code for that page. If it will be used globally, use the site-wide custom code.

Read more about the [build process](Deployment.md).

## GV Scripts

#### `carbon`[#](#carbon)

This will display the CO2 per page view and the percentile rating. Forked directly from Wholegrain digital's [carbon badge](gitlab.com/wholegrain/(https://gitlab.com/wholegrain/website-carbon-badges/)

##### Usage

Add a span, usually somewhere in the footer, and give it the `gv-carbon` classname.



#### `hide-email`[#](#hide-email)

Obfuscate's the client's email to hide it from scrapers and bots.

##### Usage

Add the clients email to an element's attributes. If the client's email is info@example.com, then add `data-user = "info"`, `data-site = "example.com"`.

The script will store the first set of `user` and `site` values it finds in the document. It will use those for each new instance of `.gv-hide-email`, unless those values are overridden by a new set. This lets you use multiple emails on the same page.

> To have the final site display the text inside the span instead of the client's email, add the optional attribute to `data-keep-text`

##### Options

| Attribute | Description | Required? | Example |
| - | - | - | - |
| data-site | The email domain | Yes | greenvision.media
| data-user | The email username | Yes | hello
| data-keep-text | Lets you keep whatever text is inside the link (Boolean) | Yes | N/A


#### `youtube`[#](#youtube)

Adds a high-performance youtube embed to your page. Forked directly from [this github project](https://github.com/paulirish/lite-youtube-embed)

##### Usage

Add a div with the class `gv-youtube` , then add the video's ID to the attributes.

##### Options

| Attribute | Description | Required? | Example |
| - | - | - | - |
| data-id | The youtube id (the code after watch?v= in the YT url) | Yes | y6120QOlsfU
| data-thumbnail | Specify a path to the a thumbnail. Overrides YT's default | No | ./images/jfk
| data-params | Specify youtube player parameters (see [this](https://developers.google.com/youtube/player_parameters#Parameters) docs page) | No | controls=0&start=10&end=30

#### `basin`[#](#basin)

Adds an ajax-enabled form to your site. Uses usebasin.com, read [their docs](https://usebasin.com/docs/) for an in depth explanation.

##### Usage

Paste your Basin form endpoint into the "actions" field in Webflow element settings, and give the form component the `gv-basin` class.

When submitted _successfully_, the form (that is, not the wrapper form component but the actual HTML form) will disappear. The div with the class `w-form-done` will appear. If the submit fails, the form will remain and the dib with the class `w-form-done` will appear.

> You don't need to add these classes in webflow; this works out of the box with webflow's failure and success divs.

## Script writing strategy

### Prettier

We use [Prettier](https://prettier.io/) to keep our code formatting consistant, and to make sure we're faced with as few unimportant decisions as possible while coding. We know some people don't love opinionated code formatters, but we're very much of the mindset that there's no best way to format code, as long as everyone is doing it the same.

You'll need to install the prettier extension in VScode and make it your default formatter. There's a guide on this [here](https://www.digitalocean.com/community/tutorials/how-to-format-code-with-prettier-in-visual-studio-code).

### Gulp

We use [Gulp](https://gulpjs.com/) to automate build processes. Mostly, this is used to minify our code, but we also like the plugin `gulp-replace` for certain scripts, where it's necessary to inject CSS or HTML directly from the script.

### Script template

We have created a [template](github.com/greenvisionmedia/template) with a nice predefined directory structure. It has a `.gulpfile` that will work for most plugins, and a `prettierrc.yaml` that has our favorite Prettier options. You might need to run `>npm install` to get gulp installed in the directory - then just run `>gulp` to get site-ready files in the /public directory.
