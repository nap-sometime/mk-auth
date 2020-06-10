import { setPublicPath } from 'systemjs-webpack-interop'
const { name } = require('../package.json')

setPublicPath(name, 2)