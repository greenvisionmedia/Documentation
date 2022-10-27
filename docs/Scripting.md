# Scripting Strategy
## Mindset
Scripting with a CMS like Webflow is tricky, and it's even trickier to add scripts without bloating the page weight.

At GV we needed a way to easily and quickly add additional functionality to our projects, while remaining maximally performant. 

We're basing our strategy on OG web performance optimizer Steve Souder's [14 Rules for Faster-Loading Web Sites. ](https://stevesouders.com/examples/rules.php).
- *Rule 6*: Put scripts at the bottom
- *Rule 8*: Make Javascript external
- *Rule 10*: Minify Javascript

## Scripting strategy
We've created GitHub repositories for the scripts we commonly used, and created a pipeline to automatically add them to your site. To include one of these scripts, simply add an HTML embed or span and give it a class like `.gv_[script name]`. 

> Use a span if the script is inserting text into an inline element, like adding carbon data to a footer text block. Use an embed in all other cases.

During the GV build process the following steps occur:
1. The document is parsed for embeds or spans with a class starting with `.gv_`
2. The page containing the script include will have a `<script>`  tag added before the `</body>` tag, calling the corresponding script.
3. The corresponding (minified) scripts will be added to the site's github repository.

Read more about our [build process](./Deployment).

## Script embed strategy
1. Add an HTML embed
2. Give the embed a class name with the following format: `gv_[script name]`
3. Open the HTML embed and add the corresponding markup.
4. Change any data-attributes to change script options 

## Script span strategy
1. Add a span to an inline element
2. Give the span a class name with the following format: `gv_[script name]`
3. Navigate to settings and change any data-attributes to change script options

## GV Scripts
### Span scripts
#### `carbon`
This will display the CO2 per page view and the percentile rating.

#### `hide-email`  
This will obfuscate the client's email to hide it from scrapers and bots.

Usage:
Add the clients email to the attributes. If the client's email is username@sitename.com, then add  `data-user = "[username]"`, `data-site = "[sitename]"`. 

Options:
To have the link display the user's email, add the optional variable `data-replace = "true"`

### Embed scripts
#### `carbon-badge`  
```

```
Adds a GV branded carbon badge to the footer.

#### `youtube`
```

```

#### `snipcart`
```

```
Uses: https://docs.snipcart.com/v3/setup/installation

#### `basin` 
```

```
Uses: https://usebasin.com/docs/features/basin-js

Usage:
Paste your Basin form endpoint into the "actions" field in Webflow element settings  

#### `mailchimp`
```

```
Uses: 