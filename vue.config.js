module.exports = {
        publicPath:"./",
        outputDir:"dist",
        assetsDir:"static",
        indexPath:"index.html",
        chainWebpack: (config) => {
                const imagesRule = config.module.rule('images')
                imagesRule.uses.clear()
                imagesRule.use('file-loader')
                  .loader('url-loader')
                  .options({
                    limit: 10000,
                    fallback: {
                      loader: 'file-loader',
                      options: {
                        name: 'img/[name].[hash:8].[ext]'
                      }
                    }
                  })    
        },
        configureWebpack: {
                // plugins: [
                //         new MyAwesomeWebpackPlugin()
                // ]
        }
}