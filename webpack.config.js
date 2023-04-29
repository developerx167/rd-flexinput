const path = require("path");
module.exports = {
    entry: './src/component/index.tsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: `index.js`,
        library :  "FlexInput",
        libraryTarget : "umd",
        globalObject : "this"
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx','d.ts']
    },
    optimization : {
        minimize : true,
    },
    module : {
        rules: [
            {
                test: /\.(jsx|tsx)$/,
                exclude: [/node_modules/],
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-react',
                            '@babel/preset-typescript',
                            '@babel/preset-env',
                        ],
                    }
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ]
    }
}