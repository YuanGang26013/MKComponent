import { RuleSetRule } from "webpack";
import * as MiniCssExtractPlugin from 'mini-css-extract-plugin';
console.log("NODE_ENV",process.env.NODE_ENV)
const rules : RuleSetRule[] = [{
    test: /\.ts(x)?$/,
    use: ['awesome-typescript-loader'],
}, {
    test : /\.(sa|sc|c)ss$/,
    use  : [
        {
            loader  : MiniCssExtractPlugin.loader,
            options : {
                hmr : process.env.NODE_ENV === 'development',
            }
        },
        'css-loader',
        // {
        //     loader  : 'postcss-loader',
        //     options : {
        //         plugins : [
        //             require('autoprefixer')
        //         ]
        //     }
        // },
        'sass-loader'
    ]
}];

export default rules;