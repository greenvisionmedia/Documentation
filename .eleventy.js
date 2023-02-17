const eleventyNavigationPlugin = require('@11ty/eleventy-navigation');

module.exports = function (eleventyConfig) {
    eleventyConfig.addPlugin(eleventyNavigationPlugin);
    eleventyConfig.addPassthroughCopy('src/*.css');
    eleventyConfig.addPassthroughCopy('src/*.woff2');
    eleventyConfig.addPassthroughCopy('src/images');
    return {
        dir: {
            input: 'src',
            output: 'public',
        },
    };
};
