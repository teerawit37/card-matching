const withSass = require('@zeit/next-sass')
const TSconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

const withTsconfigPaths = (nextConfig = {}) => ({
    ...nextConfig,
    ...{
       webpack(config, options) {
           const newConfig = {
               ...config,
               resolve: {
                   ...config.resolve,
                   plugins: [
                     ...(config.resolve && config.resolve.plugins),
                     new TSconfigPathsPlugin(),
                   ]
               }
           }
           if(typeof newConfig.webpack === 'function'){
               return nextConfig.webpack(newConfig, options)
           }

           return newConfig
       }
    }
})

module.exports = withTsconfigPaths(
    withSass({
        cssModules: true,
    })
)