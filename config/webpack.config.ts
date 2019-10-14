import * as webpack from 'webpack';
import * as HtmlWebpackPlugin from 'html-webpack-plugin'
import * as MiniCssExtractPlugin from 'mini-css-extract-plugin';
import * as paths from './paths';
import rules from './rules';
import externals from './externals';

let config : webpack.Configuration = {
    mode    :'development',
    entry   : paths.appIndexFile,
    output  : {
        path     : paths.outputDir,
        filename : `bundle.js`
    },
    resolve : {
        modules: ['node_modules'],
        alias: {
            'react-dom': '@hot-loader/react-dom',
        },
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    module  : { rules },
    plugins : [
        new HtmlWebpackPlugin({
            template : paths.appHtml,
            hash     : true,
            inject: 'body'
        }),
        new MiniCssExtractPlugin({
            filename : `style.css`
        }),
        // new webpack.DefinePlugin({
        //     "process.env": {
        //         NODE_ENV: 'development'
        //     }
        // })
    ],
    devServer : {
        hot         : true,
        open        : true,
        inline      : true,
        contentBase : 'example'
    },
    externals
};

export default config;