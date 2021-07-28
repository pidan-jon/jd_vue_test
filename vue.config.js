module.exports = {
        publicPath:"./",
        outputDir:"dist",
        assetsDir:"static",
        indexPath:"index.html",
        configureWebpack: {
                plugins: [
                        new MyAwesomeWebpackPlugin()
                ]
        }
}