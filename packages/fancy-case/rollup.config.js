import {terser} from 'rollup-plugin-terser';

export default [
    {
        input: 'src/main.js',
        plugins: [terser()], // minification (parser and mangler/compressor)
        output: {
            file: 'umd/fancy-case.js',
            format: 'umd',
            name: 'fancyCase',
            esModule: false // we are creating a dedicated ESM bundle to be used in "import default" situations, so this is not needed
        },

    },
    // dedicated ESM bundle
    {
        // designate additional edntry points (other than default)
        input: {
            index: 'src/main.js',
            lower: 'src/lower.js'
        },
        // produce code-split builds for ESM and CJS consumers
        output: [
            {
                dir: 'esm',
                format: 'esm'
            },
            {
                dir: 'cjs',
                format: 'cjs'
            }
        ]
    }
];