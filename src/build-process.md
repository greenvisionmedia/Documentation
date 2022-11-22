# Build Process Strategy

## Mindset

The main reason for developing our own custom build process was to be able to host our sites on green servers. Webflow hosts with Amazon Cloudfront and Fastly, neither of which have adequate commitments to renewable energy. 

The webflow designer does give you access to the underlying code, and by exporting that code we can host our sites anywhere we like. The challenge then becomes automating this process, to the point that our clients can update their own sites with relative ease.

If we control the build process, we can also automate a suite of compression strategies and technical improvements, to make our websites even faster and even greener. We can add scripts, minify code, improve GDPR compliance, even add CMS content back into our sites.

## Using the chrome extension



## Technical Information

Our build process has two parts, a **backend architecture** which encompasses our node application and Gitlab CI workflow, and a **chrome extension** - the visible front end which integrates directly with the webflow designer. Together, these parts integrate to make a seamless process from clicking 'publish' to seeing your site live.

### GV Publish Extension

WIP

### GV Publish Backend

WIP