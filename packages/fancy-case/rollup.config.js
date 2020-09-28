import {terser} from "rollup-plugin-terser";

export default {
    input: "src/main.js",
    plugins: [terser()], // minification (parser and mangler/compressor)
    external: ["ramda"],
    output: {
        file: "dist/fancy-case.js",
        format: "esm",
        name: "fancy-case",
    },
}