const { ModuleFederationPlugin } = require('webpack').container
module.exports = {
  mode: 'development',
  devServer: {
    port: 3000
  },
  webpack: {
    plugins: [
      new ModuleFederationPlugin({
        name: 'app1',
        filename: 'remoteEntry.js',
        exposes: {
          './App1': './src/App'
        },
        shared: ['react', 'react-dom']
      })
    ],
    configure: {
      output: {
        publicPath: 'auto'
      }
    }
  }
}
