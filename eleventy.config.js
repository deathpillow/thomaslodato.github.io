module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");

  // Collections
  eleventyConfig.addCollection("writing", function(collectionApi) {
    return collectionApi
      .getFilteredByGlob("src/writing/**/*.md")
      .filter(item => !item.data.draft)
      .sort((a, b) => b.date - a.date);
  });

  eleventyConfig.addCollection("writingTags", function(collectionApi) {
    const tags = new Set();
    collectionApi.getFilteredByGlob("src/writing/**/*.md")
      .filter(item => !item.data.draft)
      .forEach(item => {
        (item.data.tags || []).forEach(tag => tags.add(tag));
      });
    return [...tags].sort();
  });

  // Filters
  eleventyConfig.addFilter("limit", (arr, n) => arr.slice(0, n));

  eleventyConfig.addFilter("readableDate", (date) =>
    new Date(date).toLocaleDateString("en-GB", {
      year: "numeric",
      month: "short",
      day: "numeric",
      timeZone: "UTC",
    })
  );

  eleventyConfig.addFilter("isoDate", (date) =>
    new Date(date).toISOString().slice(0, 10)
  );

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
  };
};
