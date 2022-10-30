# Scripting Strategy

## Mindset

Scripting with a CMS like Webflow is tricky, and it's even trickier to add scripts without bloating the page weight.

At GV we needed a way to easily and quickly add additional functionality to our projects, while remaining maximally performant.

We're basing our strategy on OG web performance optimizer Steve Souder's [14 Rules for Faster-Loading Web Sites. ](https://stevesouders.com/examples/rules.php).

-   _Rule 6_: Put scripts at the bottom
-   _Rule 8_: Make Javascript external
-   _Rule 10_: Minify Javascript

## Plugin strategy

We've created GitHub repositories for the scripts we commonly used, and created a pipeline to automatically add them to your site. To include one of these scripts, simply add an HTML embed or span and give it a class like `.gv_[plugin name]`.

> Use a span if the plugin is inserting text into an inline element, like adding carbon data to a footer text block. Use an embed in all other cases.

During the GV build process the following steps occur:

1. The page scripts symbol is parsed for which plugins are included in each page.
2. The page containing the script include will have a `<script>` tag automatically added before the `</body>` tag, calling the corresponding script.
3. The publish advanced options config is parsed for which plugins are used in your project.
4. The corresponding (minified) scripts will be added to the site's github repository.

Read more about our [build process](./Deployment).

### Page script embed

The GV template includes a symbol with the class `.page-scripts`

Register a plugin by adding the name of the script to the override fields.

On export, add the name of the plugin in the advanced options.

### Embed plugin strategy

1. Add an HTML embed
2. Give the embed a class name with the following format: `gv_[plugin name]`
3. Open the HTML embed and add the corresponding markup.
4. Change any data-attributes to change script options

### Span plugin strategy

1. Add a span to an inline element
2. Give the span a class name with the following format: `gv_[plugin name]`
3. Navigate to settings and change any data-attributes to change script options

## GV Scripts

### Span plugins

#carbon

#### `carbon`

This will display the CO2 per page view and the percentile rating.

#hide-email

#### `hide-email`

Obfuscate's the client's email to hide it from scrapers and bots.

Usage:
Add the clients email to the span's attributes. If the client's email is username@sitename.com, then add `data-user = "[username]"`, `data-site = "[sitename]"`.

The script will store the first set of values and repeat them on every other instance of `.gv_hide-email` unless those values are overridden by a new set.

> To have the link display the text inside the span instead of the client's email, add the optional attribute to `data-keep-text`

### Embed scripts

#carbon-badge

#### `carbon-badge`

Adds a GV branded carbon badge to the footer.

```

```

#youtube

#### `youtube`

Adds a high-performance youtube embed to your page.

```
<green-youtube
data-id="[video id]"
data-thumbnail="[thumbnail url]"
data-params="[youtube parameters]"
</green-youtube>
```

#snipcart

#### `snipcart`

Adds ecommerce functionality to your page.

```
<button class="snipcart-add-item"
  data-item-id="slug-formatted-text"
  data-item-price="88.88"
  data-item-description=""
  data-item-image=""
  data-item-name="">
  Add to cart
</button>
```

Uses: https://docs.snipcart.com/v3/setup/installation

#basin

#### `basin`

Adds an ajax-enabled form to your site.

Usage:
Paste your Basin form endpoint into the "actions" field in Webflow element settings

```

```

Uses: https://usebasin.com/docs/features/basin-js

#mailchimp

#### `mailchimp`

```

```

Uses:

## Programming strategy

### Prettier

We use [Prettier](https://prettier.io/) to keep our code formatting consistant and make sure we're faced with as few decisions as possible when writing our code. You'll need to install the prettier extension in VScode and make it your default formatter.

### Gulp

We use [Gulp](https://gulpjs.com/) to automate script build processes like minification.

### Plugin template

We have created a template with a .gulpfile that will work for most plugins, and a prettierrc.yaml/.prettierignore that has our favorite prettier options. We have html ignored by default, since prettier tends to break SVGs.

Run gulp in the command line to get site-ready files in the /public directory.
