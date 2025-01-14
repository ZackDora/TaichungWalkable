const {DateTime} = require('luxon');

module.exports = function(eleventyConfig){
    eleventyConfig.addPassthroughCopy('./src/CSS/index.css');
    eleventyConfig.addPassthroughCopy('./src/images');
    eleventyConfig.addPassthroughCopy('./src/javascript');
    eleventyConfig.addPassthroughCopy('./src/admin');
    eleventyConfig.addFilter('postDate', (dateObj) => {return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATETIME_MED)});
    eleventyConfig.addPassthroughCopy("src/pdf");

    return {
        dir: {
            input: "src",
            output: "public"
        }
    };
};