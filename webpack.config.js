const path = require('path')
const fs = require('fs')

let nodeModules = {}
fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod
  })

const common =
  { externals: nodeModules
  }

const backend =
  { entry: [ 'babel-polyfill', './server.js' ]
  , output:
    { path: path.join(__dirname, 'build')
    , filename: 'server.js'
    }
  , target: 'node'
  , module:
    { loaders:
      [ { test: /\.json$/
        , loader: 'json-loader'
        }
      , { test: /\.js$/
        , loader: 'babel-loader'
        , exclude: '/node_modules/'
        , query:
          { presets: ['es2015', 'es2017' ]
          }
        }
      ]
    }
  }
module.exports =
  [ Object.assign({}, common, backend)
  ]
