/* eslint-disable functional/immutable-data */
/* eslint-disable import/no-extraneous-dependencies */
const path = require('path')

const glob = require('fast-glob')
const fs = require('fs-extra')

const REPO_ROOT = path.join(__dirname, '../')
const CORE_PACKAGE_JSON = fs.readJsonSync(path.join(REPO_ROOT, './package.json'))

function getPackagesData() {
    const packages = glob.sync(CORE_PACKAGE_JSON.workspaces.map((workspace) => path.join(__dirname, `../${workspace}/package.json`)))

    return packages.reduce((acc, item) => {
        const packageRoot = item.replace('/package.json', '')
        const { name } = fs.readJsonSync(path.join(packageRoot, 'package.json'))
        acc[name] = packageRoot
        return acc
    }, {})
}

module.exports = function getPackagesMap() {
    const packagesData = getPackagesData()

    return Object.keys(packagesData).reduce((acc, name) => {
        acc[name] = path.join(packagesData[name], packagesData[name].includes('app') ? './src' : './lib')
        return acc
    }, {})
}
