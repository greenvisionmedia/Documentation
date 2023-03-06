<!--gv-markdown-->

# Page structure strategy

## Mindset

Because GV exports and hosts webflow's static files, the final URL ends up with an ugly '.html' suffix. There are hacks to get rid of this, but the most bulletproof method is to change the directory structure of the site itself. 

![A url with .html at the end](wrong-URL.png)

Web hosts will automatically detect any HTML file inside a website subdirectory called `index.html` or `default.html`, and essentially assign that file as the 'homepage' of the subdirectory. We can do this directly in Webflow.

## Page structure strategy

When you create a new page in Webflow, follow these steps:
1. Create a folder
2. Name the folder what you want the page name to be.
3. Create a new page inside this folder, with the same name
4. Change the slug to 'default'

![The correct settings for removing .html from your url, with the title field filled out as normal and slug field changed to 'default'](webflow-page-settings.png)

The final webflow page structure will look something like this for a simple site structure.

![A screenshot of the pages window in webflow, with two folders and two pages inside those folders with the same name as their parent folder](webflow-page-structure.png)

The web host will automatically change the `https://website.com/subdirectory/default.html` to `https://website.com/subdirectory/`, like so.

![A url with no .html suffix](right-URL.png)