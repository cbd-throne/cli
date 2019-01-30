// 生成package.json and README.md

const fs = require('fs')
const path = require('path')

// 获取到version
const baseVersion = require('../packages/@cbd/cli-service/package.json').version

const packaesDir = path.resolve(__dirname, '../packages/@cbd');
const files = fs.readdirSync(packagesDir)

files.forEach(pkg => {
  if( pkg.charAt(0) === '.' ) return

  const isPlugin = /^cli-plugin-/.test(pkg);
  const desc = isPlugin
  ? `${pkg.replace('cli-plugin-', '')} plugin for cbd-cli`
  :  `${pkg.replace('cli-', '')} for cbd-cli`

  const pkgPath = path.join(packagesDir, pkg, `package.json`)
  // 如果没有package.json
  if( !fs.existsSync(pkgPath) ){
    const json = {
      "name": `@cbd/${pkg}`,
      "version": baseVersion,
      "description": desc,
      "main": "index.js",
      'publishConfig': {
        'access': 'public'
      },
      'repository': {
        'type': 'git',
        'url': 'git+https://github.com/cbd-throne/cli.git'
      },
      "author": "lirunkai",
      "license": "MIT",
      "bugs": {
        'url': 'https://github.com/cbd-throne/cli/issues'
      },
      "homepage": ""
    }
  }

})
