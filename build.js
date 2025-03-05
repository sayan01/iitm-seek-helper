require("esbuild").build({
    entryPoints: ["main.js"],
    bundle: true,
    outfile: "dist/main.js",
    minify: true,
}).catch(() => process.exit(1));
