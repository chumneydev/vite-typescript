/** @type {import('vite').UserConfig} */
export default {
  // ...
  build: {
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name.endsWith(".css")) {
            return "styles/main.[extname]";
          }
          if (assetInfo.name.endsWith(".js")) {
            return "js/main.[extname]";
          }
          if (assetInfo.name.endsWith(".ts")) {
            return "js/main.[extname]";
          }
          if (assetInfo.name.endsWith(".html")) {
            return "[name].[extname]";
          }
          return "assets/[name].[extname]";
        },
        chunkFileNames: "js/main.js",
        entryFileNames: "js/main.js",
      },
    },
  },
};
