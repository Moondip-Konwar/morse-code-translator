import adapter from "@sveltejs/adapter-static";

const config = {
  kit: {
    adapter: adapter({
      pages: "build",
      assets: "build",
      fallback: "404.html", // SPA fallback (important)
    }),
    paths: {
      base:
        process.env.NODE_ENV === "production" ? "/morse-code-translator" : "",
    },
  },
};

export default config;
