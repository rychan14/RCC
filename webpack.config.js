const path = require('path')
const fs = require('fs')

let nodeModules = {}
fs.readdirSync('node_modules')
  .filter(x => ['.bin'].indexOf(x) === -1)
  .forEach(mod => {nodeModules[mod] = 'commonjs ' + mod})

const common =
  { externals: nodeModules
  }

const backend =
  { entry: [ 'babel-polyfill', './backend/server.js' ]
  , output:
    { path: path.join(__dirname, 'dist/backend')
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

const frontend =
  { entry: [ './frontend/index.js']
  , output:
    { path: path.join(__dirname, 'dist/frontend')
    , filename: 'index.js'
    }
  , module:
    { loaders:
      [ { test:    /\.html$/
        , exclude: /node_modules/
        , loader:  'file?name=[name].[ext]'
        }
      ]
    }
  }

module.exports =
  [ Object.assign({}, common, backend)
  , Object.assign({}, common, frontend)
  ]
