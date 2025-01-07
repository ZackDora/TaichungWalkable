const {DateTime} = require('luxon');

module.exports = function(eleventyConfig){
    eleventyConfig.addPassthroughCopy('./src/CSS/index.css');
    eleventyConfig.addPassthroughCopy('./src/images');
    eleventyConfig.addPassthroughCopy('./src/javascript');

    eleventyConfig.addFilter('postDate', (dateObj) => {return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATETIME_MED)});

    return {
        dir: {
            input: "src",
            output: "public"
        }
    };
};