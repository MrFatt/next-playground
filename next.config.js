const fetch = require("isomorphic-unfetch");

module.exports = {
  assetPrefix: process.env.NODE_ENV === "production" ? "/next-playground" : "",
  exportPathMap: async function() {
    const res = await fetch("https://api.tvmaze.com/search/shows?q=batman");
    const shows = await res.json();

    const routes = shows.reduce(
      (acc, { show }) =>
        Object.assign({}, acc, {
          [`/post/${show.id}`]: {
            page: "/post",
            query: { id: show.id }
          }
        }),
      {}
    );

    return {
      "/": { page: "/" },
      "/about": { page: "/about" },
      ...routes
    };
  },
  webpack: (config, { dev }) => {
    // Perform customizations to webpack config
    // console.log('webpack');
    // console.log(config.module.rules, dev);
    config.node = {fs: "empty"}
    config.module.rules = config.module.rules.map(rule => {
      if(rule.loader === 'babel-loader') {
        rule.options.cacheDirectory = false
      }
      return rule
    })
    // Important: return the modified config
    return config
  }
};
